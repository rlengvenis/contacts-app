import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {NOTIFICATION_DISPLAY_INTERVAL} from '../../config/appConfig';
import * as notificationActions from '../../actions/notificationActions';
import './Notificationbar.css';

import ErrorMessage from './ErrorMessage/ErrorMessage';
import InfoMessage from './InfoMessage/InfoMessage';


class NotificationBar extends React.PureComponent {

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage || nextProps.infoMessage) {

      setTimeout(() => {
        this.props.notificationActions.clearMessages();
      }, NOTIFICATION_DISPLAY_INTERVAL);
    }
  }
  render() {
    const {
      errorMessage,
      infoMessage
    } = this.props;

    let messageElement = null;

    if (errorMessage) {
      messageElement = <ErrorMessage message={errorMessage}/>
    }

    if (infoMessage) {
      messageElement = <InfoMessage message={infoMessage}/>
    }

    return (
      <div className="notification-bar">
        {messageElement}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.notification.errorMessage,
  infoMessage: state.notification.infoMessage
});

const mapDispatchToProps = (dispatch) => ({
  notificationActions: bindActionCreators(notificationActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationBar);




