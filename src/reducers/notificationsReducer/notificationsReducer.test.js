import * as actionTypes from '../../actions/actionTypes';
import notificationsReducer from './notificationsReducer';


describe('notificationsReducer', () => {
  let initState;

  beforeEach(() => {
    initState = {
      errorMessage: '',
      infoMessage: ''
    };
  });

  it('should add error message', () => {
    const action = {
      type: actionTypes.NOTIFICATIONS_SHOW_ERROR,
      payload: 'Error msg text'
    };

    expect(notificationsReducer(initState, action)).to.eql({
      errorMessage: 'Error msg text',
      infoMessage: ''
    });
  });

  it('should add info message', () => {
    const action = {
      type: actionTypes.NOTIFICATIONS_SHOW_INFO,
      payload: 'Info msg text'
    };

    expect(notificationsReducer(initState, action)).to.eql({
      errorMessage: '',
      infoMessage: 'Info msg text'
    });
  });

  it('should clear messages', () => {
    const action = {
      type: actionTypes.NOTIFICATIONS_CLEAR_MESSAGES
    };

    initState = {
      errorMessage: 'Error msg text',
      infoMessage: 'Info msg text'
    };

    expect(notificationsReducer(initState, action)).to.eql({
      errorMessage: '',
      infoMessage: ''
    });
  });
});
