import React from 'react';
import {NavLink} from 'react-router-dom';

import ProfileImage from './ProfileImage';


const ContactProfile = ({contact}) => {
  return (
    <div className="profile">
      <ProfileImage
        imgUrl={contact.image}
        color={contact.color}
      />
      <ul className="profile__detail-list">
        <li className="profile__detail-list-item">
          <span className="profile__title">First Name:</span> {contact.first_name}
        </li>
        <li className="profile__detail-list-item">
          <span className="profile__title">Last Name:</span> {contact.last_name}
        </li>
        <li className="profile__detail-list-item">
          <span className="profile__title">Title:</span> {contact.title}
        </li>
        <li className="profile__detail-list-item">
          <span className="profile__title">Location:</span> {contact.location}
        </li>
        <li className="profile__detail-list-item">
          <span className="profile__title">Team:</span> {contact.team}
        </li>
        <li className="profile__detail-list-item">
          <NavLink
            to={{
              pathname: '/edit-contact',
              search: `id=${contact.id}`
            }}
          >
            Edit Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
};

export default ContactProfile;