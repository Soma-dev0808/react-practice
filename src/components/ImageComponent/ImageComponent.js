import React from "react";

const ImageComponent = ({ imgElmt, loadImage, image }) => {
  return (
    <img
      src={image}
      ref={imgElmt}
      onLoad={loadImage}
      draggable={false}
      alt="test 2"
      className="draggable-img"
    />
  );
};

export default ImageComponent;
