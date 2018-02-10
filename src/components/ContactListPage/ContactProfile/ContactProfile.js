import React from 'react';
import {NavLink} from 'react-router-dom';

import './ContactProfile.css';

import AvatarImage from '../AvatarImage/AvatarImage';


const ContactProfile = ({
  contact
}) => {

  return (
    <div className="contact-profile">
      <div className="contact-profile__avatar">
        <AvatarImage
          imgUrl={contact.image}
          color={contact.color}
        />
      </div>
      <ul className="contact-profile__detail-list">
        <li className="contact-profile__detail-list-item">
          <span className="contact-profile__title">First Name:</span> {contact.first_name}
        </li>
        <li className="contact-profile__detail-list-item">
          <span className="contact-profile__title">Last Name:</span> {contact.last_name}
        </li>
        <li className="contact-profile__detail-list-item">
          <span className="contact-profile__title">Title:</span> {contact.title}
        </li>
        <li className="contact-profile__detail-list-item">
          <span className="contact-profile__title">Location:</span> {contact.location}
        </li>
        <li className="contact-profile__detail-list-item">
          <span className="contact-profile__title">Team:</span> {contact.team}
        </li>
        <li className="contact-profile__detail-list-item">
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