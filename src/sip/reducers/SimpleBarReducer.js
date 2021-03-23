import * as actionTypes from '../actionTypes/SimpleBarActionTypes';


export const initialSimpleBar = {
    isLogin:true
};

export const simpleBar = (state = initialSimpleBar, action) => {
  switch (action.type) {
      case actionTypes.SET_IS_LOGIN_SIMPLE_BAR:
          return Object.assign({}, state, { isLogin: action.isLogin });

      case actionTypes.SET_TITLE_SIMPLE_BAR:
          return Object.assign({}, state, { title: action.title });


    default:
      return state;
  }
};
