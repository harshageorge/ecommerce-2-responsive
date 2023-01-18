import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
import { CounterButton } from "../../styles/counterButton";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="items-info">
      <div className="cartImage">
        <img src={productImage} />
      </div>

      <div className="productTitle">
        <b>{productName}</b>
      </div>
      <div className="description">
        <div className="price">£{price}</div>
        <div className="countHandler">
          <CounterButton
            className="counterButton"
            variant="contained"
            size="small"
            onClick={() => removeFromCart(id)}
          >
            -
          </CounterButton>
          <div>In Cart: {cartItemAmount} </div>
          <CounterButton
            className="counterButton"
            variant="contained"
            size="small"
            onClick={() => addToCart(id)}
          >
            +
          </CounterButton>
        </div>
      </div>
    </div>
  );
};
