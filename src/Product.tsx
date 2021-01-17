const Product = ({ name, properties }: IProduct) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <p>{name}</p>
      <ul>
        {properties.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

type IProduct = {
  name: string;
  properties: string[];
};

export default Product;
