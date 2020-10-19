import React, { useState } from "react";

import InputComponent from "./InputComponent";
import { Rnd } from "react-rnd";

const DraggableText = ({ textStamp, setTextStamp, fontSize }) => {
  const [textItemSize, setTextItemSize] = useState({ w: 70, h: 17 });
  const [textPosition, setTextPosition] = useState({ x: 10, y: 10 });

  // Trigger once dragging was stopped
  const updateTextPosition = (e, d) => {
    // Update position
    setTextPosition({
      x: d.x,
      y: d.y
    });
  };

  return (
    <Rnd
      className="rnd rnd-text"
      size={{ width: textItemSize.w, height: textItemSize.h }}
      position={{ x: textPosition.x, y: textPosition.y }}
      minWidth={50}
      minHeight={17}
      onDragStop={updateTextPosition}
      bounds="parent"
      enableResizing={(false, false, false, false, false, false, false, false)}
    >
      <InputComponent
        textStamp={textStamp}
        setTextStamp={setTextStamp}
        setTextItemSize={setTextItemSize}
        fontSize={fontSize}
      />
    </Rnd>
  );
};

export default DraggableText;
