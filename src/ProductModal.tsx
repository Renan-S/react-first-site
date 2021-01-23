import React from "react";

const ProductModal = () => {
  React.useEffect(() => {
    const handleScroll = (event: Event) => {
      console.log(event);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>My product component</p>
    </div>
  );
};

export default ProductModal;
