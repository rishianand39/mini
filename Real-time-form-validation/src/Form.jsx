import React, { useState } from "react";
import "./form.css";
import FormInput from "./FormInput/FormInput";
const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your username",
      label: "username",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z-9]{3,16}$",
      value: values.username,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "email",
      required: true,
      errorMessage: "It should be a valid email address!",
      value: values.email,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Enter your birthday",
      label: "birthday",
      required: true,
      errorMessage: "choose your birth date!",

      value: values.birthday,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Enter your password",
      label: "password",
      required: true,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      value: values.password,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Enter your confirm password",
      label: "confirm Password",
      required: true,
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      value: values.confirmPassword,
    },
  ];

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form has been submitted")
  }
  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return <FormInput key={input.id} {...input} onChange={handleInput} />;
        })}

        <input type="submit"/>
      </form>
    </div>
  );
};

export default Form;
