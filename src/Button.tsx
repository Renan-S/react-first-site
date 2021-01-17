import React from "react";

const Button = () => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <button
        style={{ marginRight: "2rem" }}
        onClick={() => setActive(!active)}
      >
        Toggle state
      </button>
      <button disabled={active}>{!active ? "Active" : "Inactive"}</button>
    </>
  );
};

export default Button;
