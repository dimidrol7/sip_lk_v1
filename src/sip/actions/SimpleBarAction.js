import * as actionTypes from '../actionTypes/SimpleBarActionTypes';

export const setIsLogin = (isLogin) => ({
    type: actionTypes.SET_IS_LOGIN_SIMPLE_BAR,
    isLogin,
});


export const setTitle = (title) => ({
    type: actionTypes.SET_TITLE_SIMPLE_BAR,
    title,
});

