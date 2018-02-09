import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import * as contactListActions from '../../actions/contactListActions';


export class ContactListPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      contactFilterType: 'first_name'
    };
  }

  componentDidMount() {
    this.props.contactListActions.getContactList();
  }

  render() {
    const {
      contactList,
    } = this.props;

    return (
      <div>
        <input
          type="text"
          value={this.state.contactFilterValue}
          onChange={this.handleContactsFilterValueChange}
        />
        <div>
          <label>Name:<input type="radio" name="filterType" value="first_name" onChange={this.handleContactFilterTypeChange} defaultChecked/></label>
          <label>Surname:<input type="radio" name="filterType" value="last_name" onChange={this.handleContactFilterTypeChange} /></label>
          <label>Title:<input type="radio" name="filterType" value="title" onChange={this.handleContactFilterTypeChange} /></label>
          <label>Location:<input type="radio" name="filterType" value="location" onChange={this.handleContactFilterTypeChange} /></label>
          <label>Team:<input type="radio" name="filterType" value="team" onChange={this.handleContactFilterTypeChange} /></label>
        </div>
        <ul className="task-page__task-list">
          {
            contactList.map((contact) => {
              return (
                <li
                  key={contact.id}
                  className="task-page__task-item"
                >
                  {contact.first_name}
                  <NavLink
                    to={{
                      pathname: '/edit-contact',
                      search: `id=${contact.id}`
                    }}
                  >
                    Edit Contact
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  handleContactFilterTypeChange = (e) => {
    console.log('handleContactFilter', e.target.value);
    this.setState({
      contactFilterType: e.target.value
    });
  };

  handleContactsFilterValueChange = (e) => {
    this.props.contactListActions.getContactList({
      contactFilterType: this.state.contactFilterType,
      contactFilterValue: e.target.value
    });
  };
}

// ContactListPage.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   reset: PropTypes.func.isRequired,
//   tasks: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     taskName: PropTypes.string.isRequired
//   })).isRequired,
//   taskActions: PropTypes.shape({
//     addTask: PropTypes.func.isRequired
//   }).isRequired
// };


const mapStateToProps = (state) => ({
  contactList: state.contactList
});

const mapDispatchToProps = (dispatch) => ({
  contactListActions: bindActionCreators(contactListActions, dispatch)
});


const ConnectedContactListPage = connect(mapStateToProps, mapDispatchToProps)(ContactListPage);

export default ConnectedContactListPage;
