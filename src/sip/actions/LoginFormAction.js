   import * as actionTypes from '../actionTypes/LoginFormActionTypes';

export const loginProgress = () => ({
    type: actionTypes.LOGIN_PROGRESS,
});

export const loginChangeUser = user => ({
    type: actionTypes.LOGIN_CHANGE_USER,
    user,
});

export const loginError = errors => ({
    type: actionTypes.LOGIN_ERROR,
    errors,
});

export const loginSuccess = () => ({
    type: actionTypes.LOGIN_SUCCESS,
});

export const loginClear = () => ({
    type: actionTypes.LOGIN_CLEAR,
});