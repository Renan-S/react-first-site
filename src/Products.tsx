import Product from "./Product";
import Title from "./Title";

const Products = () => {
  const products = [
    { name: "Notebook", properties: ["16gb ram", "512gb"] },
    { name: "Smartphone", properties: ["2gb ram", "128gb"] },
  ];
  return (
    <section>
      <Title text="Products"></Title>
      {products.map((product) => {
        return <Product key={product.name} {...product}></Product>;
      })}
    </section>
  );
};

export default Products;
