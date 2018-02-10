import React from 'react';
import classnames from 'classnames';
import {NavLink} from 'react-router-dom';

import './Navigation.css';


const Navigation = ({
  showNavigationDropdown,
  onNavigationDropdownToggle
}) => {

  const navigationStyle = classnames('navigation__list', {
    'navigation__list--visible': showNavigationDropdown
  });

  return (
    <nav>
      <i
        className="material-icons navigation__menu"
        onClick={onNavigationDropdownToggle}
      >
        menu
      </i>
      <ul className={navigationStyle}>
        <li className="navigation__list-item">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onNavigationDropdownToggle}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onNavigationDropdownToggle}
            to="/add-contact"
          >
            Add New
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;