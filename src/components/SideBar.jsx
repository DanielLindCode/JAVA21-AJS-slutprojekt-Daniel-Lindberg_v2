import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Cart from "./Cart";

const SideBar = (props) => {
  const { cartItems, addItem, removeItem } = props;

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Wrong input");
    }
  };

  const logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="sidebar-container">
      {user.email != "" ? (
        <div className="welcome">
          <p>
            Welcome brave, <span>{user.name} !</span>
          </p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
      <Cart cartItems={cartItems} addItem={addItem} removeItem={removeItem} />
    </div>
  );
};

export default SideBar;
