import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';
import * as loginFormAction from '../actions/LoginFormAction';
import * as sipAction from '../actions/SipAction';

const RegisterFormContainer = ({
                       onSubmit,
                       onChange,
                       handleRegister,
                       errors,
                       successMessage,
                       user,
                       submitDisabled,
                   }) => (
    <RegisterForm
        onSubmit={onSubmit}
        onChange={onChange}
        handleRegister={handleRegister}
        errors={errors}
        successMessage={successMessage}
        user={user}
        submitDisabled={submitDisabled}
    />
);

const mapStateToProps = (state,ownProps) => ({
    errors: state.sip.login.errors,
    successMessage: state.sip.login.successMessage,
    user: state.sip.login.user,
    submitDisabled: state.sip.login.submitDisabled,
    type: state.sip.login.type,
});

RegisterFormContainer.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        summary: PropTypes.string,
        login: PropTypes.string,
        password: PropTypes.string,
    }),
    user: PropTypes.shape({
        login: PropTypes.string,
        password: PropTypes.string,
    }),
    successMessage: PropTypes.string,
    submitDisabled: PropTypes.bool.isRequired,
};



const mapDispatchToProps = (dispatch,ownProps) => ({

    onChange(event) {
        let val = event.target.value;
        dispatch(loginFormAction.loginChangeUser({ [event.target.name]: val }));
    },
    onSubmit(user) {
        dispatch(loginFormAction.loginProgress());
        let params = `login=${user.name
            }&password=${user.password}`;
//TODO:Добавить адресс для запроса
        dispatch(sipAction.fetchPosts('register', `Отредактировать`, params, true, false))
            .then((param) => {
                let data = {};
                let errors = {};
                try{
                    data = JSON.parse(param.posts);
                    errors = data.errors ? data.errors : {}
                    errors.summary = data.message;
                    if (data.success) {
                        dispatch(loginFormAction.loginSuccess());
                        //ownProps.history.push('/sip');
                    } else {
                        dispatch(loginFormAction.loginError(errors));
                    }
                }catch(e){
                    console.log('error in register onSubmit',e);
                    dispatch(loginFormAction.loginError(
                        {summary:'Произошла ошибка. Обратитесь к администратору'}));
                }
            });
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({},
  ...ownProps,
  dispatchProps,
  stateProps, {
        onChange:(e) => dispatchProps.onChange(e),
        onSubmit:(e) => dispatchProps.onSubmit(e),
        handleRegister:() => dispatchProps.handleRegister(),
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(RegisterFormContainer));