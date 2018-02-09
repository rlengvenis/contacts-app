import * as actionTypes from '../actions/actionTypes';

const contactReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_GET_CONTACT_SUCCESS: {
      return {
        ...action.payload
      };
    }

    case actionTypes.CONTACT_RESET_CONTACT: {
      return null;
    }

    default:  {
      return state;
    }
  }
};

export default contactReducer;