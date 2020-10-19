import React, { useState } from "react";

import ImageComponent from "./ImageComponent";
import { Rnd } from "react-rnd";

// Get parent size / 3
const getFitSize = size => size / 3;

// Get another targetSize
const getAnotherFitSize = (imageSide, targetSize, anotherImageSde) =>
  (imageSide * targetSize) / anotherImageSde;

const DraggableImage = ({ parantElmt, image }) => {
  const imgElmt = React.createRef();

  const [itemSize, setItemSize] = useState({ w: 200, h: 200 });
  const [itemPosition, setItemPosition] = useState({ x: 10, y: 10 });

  const loadImage = () => {
    const parentImageWidth = parantElmt.current.offsetWidth; // Parent image size width
    const parentImageHeight = parantElmt.current.offsetHeight; // Parent image size height

    const naturalImgWidth = imgElmt.current.naturalWidth; // Uploaded image width
    const naturalImgHeight = imgElmt.current.naturalHeight; // Upload image height

    const isWidthBigger = naturalImgWidth > naturalImgHeight; // Set this for later condition

    // Try to fit in parent image size
    // isWidthBigger is true means targetSize is for width
    const targetSize = isWidthBigger
      ? getFitSize(parentImageWidth)
      : getFitSize(parentImageHeight);

    // Find another dimenstion size(width or height) beased on targetSize
    const targetAnotherSize = isWidthBigger
      ? getAnotherFitSize(naturalImgHeight, targetSize, naturalImgWidth)
      : getAnotherFitSize(naturalImgWidth, targetSize, naturalImgHeight);

    setItemSize({
      w: isWidthBigger ? targetSize : targetAnotherSize,
      h: isWidthBigger ? targetAnotherSize : targetSize
    });
  };

  // Trigger once dragging was stopped
  const updateSize = (e, direction, ref, delta, position) => {
    // Update size
    setItemSize({
      w: ref.style.width,
      h: ref.style.height
    });

    // Update position
    setItemPosition({
      x: position.x,
      y: position.y
    });
  };

  // Trigger once dragging was stopped
  const updatePosition = (e, d) => {
    // Update position
    setItemPosition({
      x: d.x,
      y: d.y
    });
  };

  return (
    <Rnd
      className="rnd"
      size={{ width: itemSize.w, height: itemSize.h }}
      position={{ x: itemPosition.x, y: itemPosition.y }}
      onResizeStop={updateSize}
      onDragStop={updatePosition}
      bounds="parent"
    >
      <ImageComponent imgElmt={imgElmt} loadImage={loadImage} image={image} />
    </Rnd>
  );
};

export default DraggableImage;
