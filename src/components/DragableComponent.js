import React, { useState } from "react";

import AddItems from "./AddItems";
import DraggableImage from "./ImageComponent/DraggableImage";
import DraggableText from "./InputComponent/DraggableText";

import "../style/Dragable.css";
import test1 from "../image/test1.jpg";

const DragableComponent = () => {
  const parantElmt = React.createRef();
  const [image, setImage] = useState(null);
  const [textStamp, setTextStamp] = useState(null);
  const [fontSize, setFontSize] = useState(13);

  return (
    <div className="container">
      <AddItems
        setImage={setImage}
        textStamp={textStamp}
        setTextStamp={setTextStamp}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <div ref={parantElmt} className="draggable-container">
        <img src={test1} alt="test1" className="parent-img" />
        {/* Image */}
        {image && <DraggableImage parantElmt={parantElmt} image={image} />}

        {/* Text */}
        {textStamp && (
          <DraggableText
            textStamp={textStamp}
            setTextStamp={setTextStamp}
            fontSize={fontSize}
          />
        )}
      </div>
    </div>
  );
};

export default DragableComponent;
