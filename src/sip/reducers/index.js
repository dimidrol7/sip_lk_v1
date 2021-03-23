import { combineReducers } from 'redux';
import { login } from './LoginFormReducer';
import { sip } from './SipReducer';
import { simpleBar } from './SimpleBarReducer';
import { settings } from './SettingsReducer';



let sipReducers = combineReducers({ sip, login, simpleBar,settings});
if (process.env.NODE_ENV === 'local_development') {
    sipReducers = combineReducers({ sip: sipReducers });
}
export default sipReducers;
