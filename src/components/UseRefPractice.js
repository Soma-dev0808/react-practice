import React, { useRef, useState, useEffect } from "react";

const UseRefPractice = () => {
  const textInputRef = useRef([]);
  const inputFields = ["code1", "code2", "code3", "code4"];
  const [textObj, setTextObj] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: ""
  });

  useEffect(() => {
    textInputRef.current[0].focus();
  }, []);

  const handleChange = e => {
    const { name, value, id } = e.target;
    // Space
    if (value === " ") return;
    setTextObj({ ...textObj, [name]: value });
    // Delete(Back space) button
    if (value === "") return;
    parseInt(id) < 3 && textInputRef.current[parseInt(id) + 1].focus();
  };

  const isDisable = () => {
    let res = false;
    Object.keys(textObj).forEach(t => {
      if (textObj[t] === "" || textObj[t] === " ") res = true;
    });
    return res;
  };

  const SubmitButton = ({ isDisable }) => {
    return (
      <div>
        <button disabled={isDisable}>Submit</button>
      </div>
    );
  };
  return (
    <div>
      <h1>Hello</h1>
      <div>
        {inputFields.map((f, i) => {
          return (
            <input
              type="text"
              maxLength="1"
              value={textObj[f]}
              ref={el => (textInputRef.current[i] = el)}
              onChange={handleChange}
              name={f}
              key={i}
              id={i}
            />
          );
        })}
      </div>
      <SubmitButton isDisable={isDisable()} />
    </div>
  );
};

export default UseRefPractice;
