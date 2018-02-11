import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import './ContactListPage.css';

import * as contactListActions from '../../actions/contactListActions';
import * as notificationActions from '../../actions/notificationActions';

import FilterTypeSelector from './FilterTypeSelector/FilterTypeSelector';
import DefaultSpinner from '../shared/DefaultSpinner/DefaultSpinner';
import ContactProfile from './ContactProfile/ContactProfile';


export class ContactListPage extends React.Component {

  constructor(props) {
    super(props);

    // It is more of UI state changes, don't want to use redux as it increases boilerplate
    this.state = {
      contactFilterType: 'first_name',
      contactFilterValue: ''
    };
  }

  componentDidMount() {
    this.props.contactListActions.getContactList();
  }

  componentWillUnmount() {
    this.props.notificationActions.clearMessages();
  }

  render() {
    const {
      contactList,
    } = this.props;

    if (!contactList) {
      return <DefaultSpinner/>
    }

    return (
      <div>
        <input
          className="input"
          placeholder="Filter contacts"
          type="text"
          value={this.state.contactFilterValue}
          onChange={this.handleContactsFilterValueChange}
        />

        <FilterTypeSelector
          onContactFilterTypeChange={this.handleContactFilterTypeChange}
        />

        <ul className="contact-list-page__contact-list">
          {
            contactList.map((contact) => {
              return (
                <li key={contact.id}>
                  <ContactProfile contact={contact}/>
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  }

  handleContactFilterTypeChange = (e) => {
    this.setState({
      contactFilterType: e.target.value
    });

    this.props.contactListActions.getContactList({
      contactFilterType: e.target.value,
      contactFilterValue: this.state.contactFilterValue
    });
  };

  handleContactsFilterValueChange = (e) => {
    this.setState({
      contactFilterValue: e.target.value
    });

    this.props.contactListActions.getContactList({
      contactFilterType: this.state.contactFilterType,
      contactFilterValue: e.target.value
    });
  };
}

ContactListPage.propTypes = {
  contactList: PropTypes.array,
  contactListActions: PropTypes.shape({
    getContactList: PropTypes.func.isRequired
  }).isRequired,
  notificationActions: PropTypes.shape({
    clearMessages: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  contactList: state.contactList
});

const mapDispatchToProps = (dispatch) => ({
  contactListActions: bindActionCreators(contactListActions, dispatch),
  notificationActions: bindActionCreators(notificationActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListPage);

