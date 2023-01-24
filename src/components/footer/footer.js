import { AppBar, Button, styled, Toolbar, Typography, Badge,Grid} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext }  from "react";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Footer = () => {
  const navigate = useNavigate();
  const { getTotalCartItem } = useContext(ShopContext);
  const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#291715",
    marginTop:'auto',
    color:'white',
    display: "flex",
    justifyContent: "center",
  });
  return (
<StyledToolbar onClick={() =>document.body.scrollIntoView()}>
Back to top
</StyledToolbar>
  );
};
