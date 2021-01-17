import { InputHTMLAttributes, FC } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  id,
  name,
  ...opts
}) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{name}</label>
      <input id={id} type="text" {...opts}></input>
    </div>
  );
};

export default Input;
