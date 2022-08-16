import React, { useState } from "react";
import "./forminput.css";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, ...others } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form__input">
      <label htmlFor={props.id}>{label}</label>
      <input
        {...others}
        onBlur={handleFocus}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
