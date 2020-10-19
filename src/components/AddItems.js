import React from "react";

const AddItems = ({
  setImage,
  textStamp,
  setTextStamp,
  fontSize,
  setFontSize
}) => {
  const onImageUpload = e => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const removeImage = () => setImage(null);

  const addText = () => setTextStamp("Text");

  const removeText = () => setTextStamp(null);

  const handleNumber = e => {
    const inputNum = e.target.value;
    if (inputNum === "") return;
    setFontSize(parseInt(inputNum));
  };

  return (
    <div className="image-input">
      <h2>Select Image</h2>
      <label htmlFor="draggableImage" className="upload-image-button">
        Upload Image Here
      </label>
      <input type="file" id="draggableImage" onChange={onImageUpload} />
      <div className="remove-button-container">
        <button onClick={removeImage}>Reomove Item</button>
      </div>

      <h2>Add Text</h2>
      <div className="text-buttons">
        <button onClick={addText}>Add Text Stamp</button>
      </div>
      <div className="text-buttons">
        <button onClick={removeText}>Remove Text Stamp</button>
      </div>

      <div className="text-buttons">
        <input
          type="number"
          value={fontSize}
          onChange={handleNumber}
          disabled={textStamp === null}
        />
      </div>
    </div>
  );
};

export default AddItems;
