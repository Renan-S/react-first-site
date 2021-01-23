import React from "react";
import ProductModal from "./ProductModal";
import Product from "./Product";

function App() {
  const [count, setCount] = React.useState(0);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    console.log("Executed once");
  }, []);

  React.useEffect(() => {
    console.log("Executed when count changes");
    document.title = "Counter " + count;
  }, [count]);

  return (
    <div>
      {active && <ProductModal />}
      <Product count={count} />
      <button
        style={{ marginRight: "1rem", marginTop: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        Count value is: {count}
      </button>
      <button onClick={() => setActive(!active)}>Activate</button>
    </div>
  );
}

export default App;
