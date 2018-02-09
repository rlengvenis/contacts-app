import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import './Header.css';

import Navigation from './Navigation';


const MEDIA_MD = 600; // The viewport min size, where mobile navigation bar is not shown any more

export class Header extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isNavigationVisible: window.innerWidth >= MEDIA_MD
    };
  }

  render() {
    return (
      <header className="app-header">
        <Navigation
          isNavigationVisible={this.state.isNavigationVisible}
          onNavigationVisibilityToggle={this.handleNavigationVisibilityToggle}
        />
      </header>
    );
  }

  handleNavigationVisibilityToggle = () => {
    this.setState({
      isNavigationVisible: window.innerWidth >= MEDIA_MD || !this.state.isNavigationVisible
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

export default connect(mapStateToProps, null)(Header);