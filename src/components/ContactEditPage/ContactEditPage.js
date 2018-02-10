import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import * as contactActions from '../../actions/contactActions/contactActions';

import DefaultSpinner from '../shared/DefaultSpinner/DefaultSpinner';
import ContactForm from '../ContactForm/ContactForm';


export class ContactEditPage extends React.PureComponent {
  componentDidMount() {
    const searchQuery = this.props.location.search;
    const contactId = queryString.parse(searchQuery).id;

    this.props.contactActions.getContactById(contactId);
  }

  componentWillUnmount() {
    this.props.contactActions.resetContact();
  }

  render() {
    if (!this.props.initialValues) {
      return <DefaultSpinner/>;
    }

    return (
      <ContactForm
        onSubmitContact={this.handleEditContact}
        {...this.props}
      />
    )
  }

  handleEditContact = (formData) => {
    return this.props.contactActions.updateContact({
      contact: formData
    });
  }
}

ContactEditPage.proptypes = {
  contactActions: PropTypes.shape({
    getContactById: PropTypes.func.isRequired,
    resetContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired
  }).isRequired,
  initialValues: PropTypes.object
};

const mapStateToProps = (state) => ({
  initialValues: state.contact
});

const mapDispatchToProps = (dispatch) => ({
  contactActions: bindActionCreators(contactActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactEditPage);

