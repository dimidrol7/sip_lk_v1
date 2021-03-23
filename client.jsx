'use_strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import configureStore from './configureStore';
import {login} from './src/sip/reducers/LoginFormReducer';
import {sip} from './src/sip/reducers/SipReducer';
import {simpleBar} from './src/sip/reducers/SimpleBarReducer';
import {settings} from './src/sip/reducers/SettingsReducer';

import RootSip from './src/sip/containers/RootSip';

const store = configureStore('sip', combineReducers({sip: combineReducers(Object.assign(
    {},
    { login },
    { sip },
    { simpleBar },
    { settings }
))}));




ReactDOM.render(
    <RootSip store={store}/>,
    document.getElementById('root'),
);