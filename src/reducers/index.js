import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form'

import notificationsReducer from './notificationsReducer/notificationsReducer';
import contactListReducer from './contactListReducer';
import contactReducer from './contactReducer';


export default combineReducers({
  notifications: notificationsReducer,
  contactList: contactListReducer,
  contact: contactReducer,
  form: formReducer,
  routing: routerReducer
});
