
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";
import { CounterButton } from "../../styles/counterButton";


export const Product = (props) => {
  // console.log(props);
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <div className="title">
          <b>{productName}</b>
        </div>
        <div className="price">${price}</div>
      </div>
      {cartItemAmount > 0 ? (
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
      ) : (
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
      )}
    </div>
  );
};
