import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactActions from '../../actions/contactActions';

import ContactForm from '../ContactForm/ContactForm';


export class ContactAddPage extends React.PureComponent {
  render() {
    return (
      <ContactForm
        handleContact={this.handleAddNewContact}
      />
    )
  }

  handleAddNewContact = (formData) => {
    this.props.contactActions.addNewContact({
      contact: formData
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  contactActions: bindActionCreators(contactActions, dispatch)
});

const ConnectedContactAddPage = connect(null, mapDispatchToProps)(ContactAddPage);

export default ConnectedContactAddPage;
