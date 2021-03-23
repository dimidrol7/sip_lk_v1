import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import * as loginFormAction from '../actions/LoginFormAction';
import * as sipAction from '../actions/SipAction';
import * as simpleBarAction from '../actions/SimpleBarAction';
import * as settingsAction from '../actions/SettingsAction';

const AUTH_ADDRESS = 'http://192.168.35.4/admclntlk/auth.php';
const LoginFormContainer = ({
                       onSubmit,
                       onChange,
                       handleRegister,
                       errors,
                       successMessage,
                       user,
                       submitDisabled,
                   }) => (
    <LoginForm
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

LoginFormContainer.propTypes = {
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
    onSubmit(e,user) {
        dispatch(loginFormAction.loginProgress());
        let params = `login=${user.login
            }&email=&password=${user.password
            }&mobileNumber=`;

        //Ответ от сервера
        /*let serverRequest = {success:true} || {success:false,message:''}'*/




        dispatch(sipAction.fetchPosts('login', AUTH_ADDRESS, params, true, false))
            .then((param) => {
                let data = {};
                let errors = {};
                try{
                    data = JSON.parse(param.posts);
                    errors = data.errors ? data.errors : {}
                    errors.summary = data.message;
                    if (data.success) {
                        dispatch(loginFormAction.loginSuccess());
                        //ownProps.history.push('/settings');
                        dispatch(simpleBarAction.setTitle(data.name));
                        dispatch(settingsAction.setArrNumbers(data.numbers));
                        dispatch(settingsAction.setTableData(data.table));
                        ownProps.history.push('/settings');

                    } else {
                        dispatch(loginFormAction.loginError(errors));
                    }
                }catch(e){
                    console.log('error in register onSubmit',e);
                    let errorMessage = 'Произошла ошибка. Обратитесь к администратору';
                    if(param && param.posts){
                        errorMessage = `${errorMessage} Ответ сервера: ${param.posts}`;
                    }

                    dispatch(loginFormAction.loginError(
                        {summary:errorMessage}));
                }
            });
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({},
  ...ownProps,
  dispatchProps,
  stateProps, {
        onChange:(e) => dispatchProps.onChange(e),
        onSubmit:(e) => dispatchProps.onSubmit(e,stateProps.user),
        handleRegister:() => dispatchProps.handleRegister(),
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginFormContainer));