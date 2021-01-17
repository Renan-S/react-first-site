import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="name">Name</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
