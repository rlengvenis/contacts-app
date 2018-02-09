import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactActions from '../../actions/contactActions';

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

const mapDispatchToProps = (dispatch) => ({
  contactActions: bindActionCreators(contactActions, dispatch)
});

const ConnectedContactAddPage = connect(null, mapDispatchToProps)(ContactAddPage);

export default ConnectedContactAddPage;
