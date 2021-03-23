import * as actionTypes from '../actionTypes/RegisterFormActionTypes';

const initialLogin = {
    errors: {},
    successMessage: '',
    user: {
        login:'',
        password: '',
    },
    submitDisabled: false,
};
export const login = (state = initialLogin, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_CHANGE_USER:
            return { ...state, user: { ...state.user, ...action.user } };
        case actionTypes.REGISTER_CLEAR:
            return initialLogin;
        case actionTypes.REGISTER_PROGRESS:
            return { ...state, submitDisabled: true };
        case actionTypes.REGISTER_SUCCESS:
            return initialLogin;
        case actionTypes.REGISTER_ERROR:
            return { ...state, errors: action.errors, submitDisabled: false };
        default:
            return state;
    }
}