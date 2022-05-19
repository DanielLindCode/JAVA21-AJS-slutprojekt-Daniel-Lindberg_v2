import React from "react";

const Cart = (props) => {
  const { cartItems, addItem, removeItem } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  return (
    <div className="cart-container">
      <h4>Items</h4>
      <div className="cartItems-container">
        {cartItems.length === 0 && <div>The wagon is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <div>
              {item.qty} x {item.price} Gold
            </div>
            <div>
              <button onClick={() => removeItem(item)} className="remove">
                -
              </button>

              <button onClick={() => addItem(item)} className="add">
                +
              </button>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <div className="price-container">
            <div>
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>

            <div>
              <div>
                <strong>Total Price</strong>
              </div>
              <div>
                <strong>{totalPrice.toFixed(2)} Gold</strong>
              </div>
            </div>
            <div>
              <button onClick={() => alert("Under construction!")}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
