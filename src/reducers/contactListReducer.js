import * as actionTypes from '../actions/actionTypes';

const contactListReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_LIST_GET_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default contactListReducer;
