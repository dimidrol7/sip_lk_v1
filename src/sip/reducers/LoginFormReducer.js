import * as actionTypes from '../actionTypes/LoginFormActionTypes';

const initialLogin = {
    errors: {},
    successMessage: '',
    user: {
        login:'maleks',
        password: 'dc888ee',
    },
    submitDisabled: false,
};
export const login = (state = initialLogin, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_CHANGE_USER:
            return { ...state, user: { ...state.user, ...action.user } };
        case actionTypes.LOGIN_CLEAR:
            return initialLogin;
        case actionTypes.LOGIN_PROGRESS:
            return { ...state, submitDisabled: true };
        case actionTypes.LOGIN_SUCCESS:
            return initialLogin;
        case actionTypes.LOGIN_ERROR:
            return { ...state, errors: action.errors, submitDisabled: false };
        default:
            return state;
    }
}
