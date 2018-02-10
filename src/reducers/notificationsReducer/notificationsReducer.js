import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
  errorMessage: '',
  infoMessage: ''
};

const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NOTIFICATIONS_SHOW_INFO: {
      return {
        ...state,
        infoMessage: action.payload
      }
    }

    case actionTypes.NOTIFICATIONS_SHOW_ERROR: {
      return {
        ...state,
        errorMessage: action.payload
      }
    }

    case actionTypes.NOTIFICATIONS_CLEAR_MESSAGES: {
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

export default notificationsReducer;