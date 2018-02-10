import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form'

import notificationReducer from './notificationReducer';
import contactListReducer from './contactListReducer';
import contactReducer from './contactReducer';


export default combineReducers({
  notification: notificationReducer,
  contactList: contactListReducer,
  contact: contactReducer,
  form: formReducer,
  routing: routerReducer
});
