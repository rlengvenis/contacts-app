import axios from 'axios';

import history from '../history';
import * as actionTypes from './actionTypes';
import {
  addHashToColorCode,
  removeHashFromColorCode
} from '../utils/contactsDataUtils';


export const addNewContact = ({contact}) => async (dispatch) => {
  try {
    await axios.post('/contacts', removeHashFromColorCode(contact));

    dispatch({
      type: actionTypes.NOTIFICATIONS_SHOW_INFO,
      payload: 'Contact successfully added'
    });

    history.push({
      pathname: '/contacts'
    });

  } catch (error) {
    dispatch({
      type: actionTypes.NOTIFICATIONS_SHOW_ERROR,
      payload: 'Error occurred while adding new contact'
    });
  }
};

export const getContactById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/contacts/${id}`);

    dispatch({
      type: actionTypes.CONTACT_GET_CONTACT_SUCCESS,
      payload: addHashToColorCode(response.data)
    });

  } catch (error) {
    dispatch({
      type: actionTypes.NOTIFICATIONS_SHOW_ERROR,
      payload: 'Error occurred while getting a contact by id'
    });
  }
};

export const resetContact = () => ({
  type: actionTypes.CONTACT_RESET_CONTACT
});

export const updateContact = ({contact}) => async (dispatch) => {
  try {
    await axios.put(`/contacts/${contact.id}`, removeHashFromColorCode(contact));

    dispatch({
      type: actionTypes.NOTIFICATIONS_SHOW_INFO,
      payload: 'Contact successfully updated'
    });

    history.push({
      pathname: '/contacts'
    });

  } catch (error) {
    dispatch({
      type: actionTypes.NOTIFICATIONS_SHOW_ERROR,
      payload: 'Error occurred while updating a contact'
    });
  }
};