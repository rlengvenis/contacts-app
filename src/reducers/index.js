import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form'

import contactListReducer from './contactListReducer';
import contactReducer from './contactReducer';


export default combineReducers({
  contactList: contactListReducer,
  contact: contactReducer,
  form: formReducer,
  routing: routerReducer
});
