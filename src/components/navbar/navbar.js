import { AppBar, Button, styled, Toolbar, Typography, Badge} from "@mui/material";
import React, { useContext }  from "react";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalCartItem } = useContext(ShopContext);
  const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#291715",
    display: "flex",
    justifyContent: "space-between",
  });
  const StyledButton = styled(Button)({
    color: "white",
    display:"flex",
    gap:'1rem'
  });
  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledButton onClick={() => navigate("/")}>
        <StoreIcon sx={{ display: { xs: "block" } }} />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Shop
          </Typography>
        </StyledButton>
        <StyledButton onClick={() => navigate("/cart")}>
          <Badge badgeContent={getTotalCartItem()} color="secondary">
            <ShoppingCartIcon color="white" />
          </Badge>
        </StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};
