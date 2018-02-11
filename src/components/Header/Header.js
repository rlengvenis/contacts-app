import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

import Navigation from './Navigation/Navigation';


export class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showNavigationDropdown: false
    };
  }

  render() {
    return (
      <header className="app-header">
        <Navigation
          showNavigationDropdown={this.state.showNavigationDropdown}
          onNavigationDropdownToggle={this.handleNavigationDropdownToggle}
        />
      </header>
    );
  }

  handleNavigationDropdownToggle = () => {
    this.setState({
      showNavigationDropdown: !this.state.showNavigationDropdown
    });
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  routing: PropTypes.object
};


const mapStateToProps = (state) => ({
  routing: state.routing //Otherwise active links are not updated, even though router setState happens
});

export default connect(
  mapStateToProps,
  null
)(Header);
