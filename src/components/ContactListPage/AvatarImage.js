import React from 'react';

import "./AvatarImage.css";


const AvatarImage = ({
  imgUrl,
  color
}) => {

  if (!imgUrl) {
    return (
      <div
        className="avatar-image"
        style={{backgroundColor: color}}
      >
        No Photo
      </div>
    )
  }

  return (
    <img
      className="avatar-image"
      src={imgUrl}
      alt="Profile avatar"
    />
  )
};

export default AvatarImage;