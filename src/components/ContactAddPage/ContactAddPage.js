import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as contactActions from '../../actions/contactActions/contactActions';

import ContactForm from '../ContactForm/ContactForm';


export class ContactAddPage extends React.PureComponent {

  componentWillUnmount() {
    this.props.contactActions.resetContact();
  }

  render() {
    return (
      <ContactForm
        onSubmitContact={this.handleAddNewContact}
      />
    )
  }

  handleAddNewContact = (formData) => {
    return this.props.contactActions.addNewContact({
      contact: formData
    });
  }
}

ContactAddPage.proptypes = {
  contactActions: PropTypes.shape({
    addNewContact: PropTypes.func.isRequired,
    resetContact: PropTypes.func.isRequired,
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  contactActions: bindActionCreators(contactActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ContactAddPage);

