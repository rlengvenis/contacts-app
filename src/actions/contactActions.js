import axios from 'axios';

import history from '../history';
import * as actionTypes from './actionTypes';


export const addNewContact = ({contact}) => async (dispatch) => {
  try {
    await axios.post('/contacts', contact);

    // dispatch({
    //   type: actionTypes.CONTACT_ADD_NEW_CONTACT_SUCCESS
    // });

    history.push({
      pathname: '/contacts'
    });

  } catch (error) {
    // dispatch({
    //   type: actionTypes.CONTACT_LIST_GET_ERROR,
    //   payload: 'Error occurred while getting contact list'
    // });
  }
};

export const getContactById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/contacts/${id}`);

    dispatch({
      type: actionTypes.CONTACT_GET_CONTACT_SUCCESS,
      payload: response.data
    });

  } catch (error) {
    // dispatch({
    //   type: actionTypes.CONTACT_LIST_GET_ERROR,
    //   payload: 'Error occurred while getting contact list'
    // });
  }
};

export const resetContact = () => ({
  type: actionTypes.CONTACT_RESET_CONTACT
});

export const updateContact = ({contact}) => async (dispatch) => {
  try {
    await axios.put(`/contacts/${contact.id}`, contact);

    // dispatch({
    //   type: actionTypes.CONTACT_EDIT_ADD_NEW_CONTACT_SUCCESS
    // });

    history.push({
      pathname: '/contacts'
    });

  } catch (error) {
    // dispatch({
    //   type: actionTypes.CONTACT_LIST_GET_ERROR,
    //   payload: 'Error occurred while getting contact list'
    // });
  }
};