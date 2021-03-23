import * as actionTypes from '../actionTypes/SettingsActionTypes';

export const setTableData = (tableData) => ({
    type: actionTypes.SET_TABLE_DATA_SETTINGS_SIP,
    tableData,
});

export const setArrNumbers = (arrNumbers) => ({
    type: actionTypes.SET_ARR_NUMBERS_SETTINGS_SIP,
    arrNumbers,
});


export const setNumberValue = (numberValue) => ({
    type: actionTypes.SET_NUMBER_VALUE_SETTINGS_SIP,
    numberValue,
});


