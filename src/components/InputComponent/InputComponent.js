import React, { useEffect } from "react";

const InputComponent = ({
  textStamp,
  setTextStamp,
  setTextItemSize,
  fontSize
}) => {
  const inputRef = React.createRef();

  useEffect(() => {
    const elWidth = inputRef.current.offsetWidth;
    const elHeigh = inputRef.current.offsetHeight;

    if (elWidth <= 70 && elHeigh <= 17) return;
    setTextItemSize({
      w: elWidth,
      h: elHeigh
    });
  }, [textStamp, fontSize]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = e => {
    const inputValue = e.currentTarget.textContent;
    setTextStamp(inputValue ? inputValue : " ");
  };

  const inputStyles = {
    text: {
      display: "inline-block",
      borderBottom: "solid 1px black",
      minWidth: "70px",
      fontSize: fontSize,
      outline: "none"
    }
  };

  return (
    <span
      contentEditable={true}
      style={inputStyles.text}
      onInput={handleChange}
      ref={el => (inputRef.current = el)}
    ></span>
  );
};

export default InputComponent;
