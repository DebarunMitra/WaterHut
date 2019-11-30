import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import consumer from './consumer';


export default combineReducers({
  alert,auth,consumer
});
