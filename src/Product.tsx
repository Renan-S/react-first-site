import React from "react";
import ProductModel from "./product-model";

type Counter = {
  count: number;
};

const Product = ({ count }: Counter) => {
  const [productName, setProductName] = React.useState("");
  const [data, setData] = React.useState(new ProductModel());

  //   React.useEffect(() => {
  //     (async () => {
  //       const getNotebook = await fetch(
  //         "https://ranekapi.origamid.dev/json/api/produto/notebook"
  //       );
  //       setData(await getNotebook.json());
  //     })();
  //   }, []);

  React.useEffect(() => {
    if (productName) {
      window.localStorage.setItem("product", productName);
      callProductAPI();
    }
  }, [productName]);

  React.useEffect(() => {
    const storageItem = window.localStorage.getItem("product");
    if (storageItem) {
      setProductName(storageItem);
    }
  }, []);

  const handleClick = ({ target }: any) => {
    setProductName(target.innerText);
  };

  const callProductAPI = async () => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productName}`
    );
    const json = await response.json();
    setData(json);
  };

  return (
    <>
      {data && (
        <div>
          <h1>Preference: {productName}</h1>
          <p>{count > 0 && +data.preco * count}</p>
          <p>
            {count} time the {productName} product price
          </p>
          <button onClick={handleClick} style={{ marginRight: "1rem" }}>
            Notebook
          </button>
          <button onClick={handleClick}>Smartphone</button>
        </div>
      )}
    </>
  );
};

export default Product;
