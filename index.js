'use_strict';
import SipContainer from './src/sip/containers/SipContainer';
import sipReducers from './src/sip/reducers/index';
// TODO: Добавить префиксы settings
export const sip =  { container: SipContainer, reducer: sipReducers };