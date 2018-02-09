import React from 'react';

const ProfileImage = ({imgUrl, color}) => {
  if (!imgUrl) {
    return (
      <div
        className="contact-profile__image"
        style={{backgroundColor: color}}
      >
        No Photo
      </div>
    )
  }

  return (
    <img
      className="contact-profile__image"
      src={imgUrl}
      alt="Profile avatar"
    />
  )
};

export default ProfileImage;