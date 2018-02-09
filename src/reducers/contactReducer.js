import * as actionTypes from '../actions/actionTypes';

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_GET_CONTACT_SUCCESS: {
      return {
        ...action.payload
      };
    }

    case actionTypes.CONTACT_RESET_CONTACT: {
      return {};
    }

    default:  {
      return state;
    }
  }
};

export default contactReducer;