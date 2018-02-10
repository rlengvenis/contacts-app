import React from 'react';
import PropTypes from 'prop-types';

import './InfoMessage.css';


const InfoMessage = ({
  message
}) => {

  return (
    <p className="info-message">{message}</p>
  );
};

InfoMessage.propTypes = {
  message: PropTypes.string.isRequired
};


export default InfoMessage;