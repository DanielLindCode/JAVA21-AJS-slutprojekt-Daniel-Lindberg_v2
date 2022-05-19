import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

const HomePage = (props) => {
  const { cartItems, addItem, removeItem, products } = props;
  return (
    <>
      <div className="componentContainer">
        <Header />
        <Sidebar
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
        />

        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
