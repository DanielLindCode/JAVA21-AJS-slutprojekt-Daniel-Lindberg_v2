import React, { useState } from "react";
import jsonData from "./react-db.json";

import HomePage from "./components/HomePage";

const App = () => {
  const { products } = jsonData;

  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <HomePage
        products={products}
        cartItems={cartItems}
        addItem={addItem}
        removeItem={removeItem}
      />
    </>
  );
};

export default App;
