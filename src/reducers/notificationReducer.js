import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  errorMessage: '',
  infoMessage: ''
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NOTIFICATION_SHOW_INFO: {
      return {
        ...state,
        infoMessage: action.payload
      }
    }

    case actionTypes.NOTIFICATION_SHOW_ERROR: {
      return {
        ...state,
        errorMessage: action.payload
      }
    }

    case actionTypes.NOTIFICATION_CLEAR_MESSAGES: {
      return {
        errorMessage: '',
        infoMessage: ''
      }
    }

    default: {
      return state;
    }
  }
};

export default notificationReducer;