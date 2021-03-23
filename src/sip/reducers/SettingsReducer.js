import * as actionTypes from '../actionTypes/SettingsActionTypes';

const initialSettings = {
    tableData:[],
    arrNumbers:[],
    numberValue:'-1'
};
export const settings = (state = initialSettings, action) => {
    switch (action.type) {
        case actionTypes.SET_TABLE_DATA_SETTINGS_SIP:
            return Object.assign({}, state, { tableData: action.tableData });
        case actionTypes.SET_ARR_NUMBERS_SETTINGS_SIP:
            return Object.assign({}, state, { arrNumbers: action.arrNumbers });
        case actionTypes.SET_NUMBER_VALUE_SETTINGS_SIP:
            return Object.assign({}, state, { numberValue: action.numberValue });
        default:
            return state;
    }
}
