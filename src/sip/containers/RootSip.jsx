import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as simpleBarAction from '../actions/SimpleBarAction';
import SimpleBarContainer from '../containers/SimpleBarContainer';





import LoginForm from '../containers/LoginFormContainer';
import RegisterForm from '../containers/RegisterFormContainer';
import SipContainer from '../containers/SipContainer.jsx';
import SettingsContainer from '../containers/SettingsContainer.jsx';

class RootSip extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <HashRouter>
                    <div>
                        <SimpleBarContainer/>
                        <div>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    console.log('route to /');
                                    this.props.setIsLogin(true);
                                    return <LoginForm />;
                                }}
                            />
                            <Route
                                path="/login"
                                render={() => {
                                    this.props.setIsLogin(true);
                                    console.log('route to /login');
                                    return <LoginForm />;
                                }}
                            />
                            <Route
                                path="/sip"
                                render={() => {
                                    this.props.setIsLogin(false);
                                    console.log('route to /sip');
                                    return <SipContainer/>;
                                }}
                            />
                            <Route
                                path="/settings"
                                render={() => {
                                    this.props.setIsLogin(false);
                                    console.log('route to /sip');
                                    return <SettingsContainer/>;
                                }}
                            />
                            <Route
                                path="/register"
                                render={() => {
                                    this.props.setIsLogin(false);
                                    console.log('route to /register');
                                    return <RegisterForm/>;
                                }}
                            />
                        </div>
                    </div>
                </HashRouter >
            </Provider>
        );
    }
};


RootSip.propTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired,
    setIsLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state,ownProps) => ({
    store: ownProps.store,
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    setIsLogin(isLogin){
        dispatch(simpleBarAction.setIsLogin(isLogin));
    }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({},
    ...ownProps,
    dispatchProps,
    stateProps, {
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(RootSip);