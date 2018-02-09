import React from 'react';

const ProfileImage = ({imgUrl, color}) => {
  if (!imgUrl) {
    return (
      <div
        className="profile__image"
        style={{backgroundColor: color}}
      >
        No Photo
      </div>
    )
  }

  return (
    <img
      className="profile__image"
      src={imgUrl}
      alt="Profile avatar"
    />
  )
};

export default ProfileImage;