import * as actionTypes from '../actionTypes/RegisterFormActionTypes';

export const registerChangeUser = user => ({
    type: actionTypes.REGISTER_CHANGE_USER,
    user,
});

export const registerProgress = () => ({
    type: actionTypes.REGISTER_PROGRESS,
});

export const registerSuccess = () => ({
    type: actionTypes.REGISTER_SUCCESS,
});

export const registerShowSendCode = () => ({
    type: actionTypes.REGISTER_SHOW_SEND_CODE,
});

export const registerError = errors => ({
    type: actionTypes.REGISTER_ERROR,
    errors,
});

export const registerClear = () => ({
    type: actionTypes.REGISTER_CLEAR,
});