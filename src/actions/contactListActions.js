import axios from 'axios';

import * as actionTypes from './actionTypes';
import {addHashToColorCodes} from '../utils/contactsDataUtils';


export const getContactList = (filterConfig) => async (dispatch) => {
  let urlString = '';

  if (filterConfig) {
    const {contactFilterType, contactFilterValue} = filterConfig;

    if (contactFilterValue !== '') {
      urlString = `/contacts?${contactFilterType}=${contactFilterValue}`;
    } else {
      urlString = '/contacts';
    }
  }

  try {
    const response = await axios.get(urlString);

    dispatch({
      type: actionTypes.CONTACT_LIST_GET_SUCCESS,
      payload: addHashToColorCodes(response.data)
    });

  } catch (error) {
    dispatch({
      type: actionTypes.NOTIFICATIONS_SHOW_ERROR,
      payload: 'Error occurred while getting contact list'
    });
  }
};
