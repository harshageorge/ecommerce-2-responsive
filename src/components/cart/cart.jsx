import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";

export const Cart = () => {
  const { addToCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
  <>
  {totalAmount>0?(
    <Box
      sx={{
        width: "85%",
        maxHeight: "26rem",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        margin: "30px auto",
        overflowY: "scroll",
        borderRadius: "10px",
        padding:'15px',
   
    
      }}
    >
      {/* <Box
        spacing={2}
        sx={{ width: "90%", height: "14rem", margin: "30px auto", }}
      > */}
        {Array.from(PRODUCTS).map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      {/* </Box> */}
      </Box>
  ):(
    <h1 style={{textAlign:'center',marginTop:'20px'}}>Your cart is empty</h1>
  )}
    
   
         {totalAmount > 0 ? (
          <Box sx={{ width: "100%", height: "6rem",display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              
         <p><b>Subtotal: £{getTotalCartAmount()}</b></p>
         <button  className="checkout" onClick={() => navigate("/")} >Continue Shopping</button>
    
          </Box>
        ) : (
         ' '
        )}
     </>
   
  );
};
