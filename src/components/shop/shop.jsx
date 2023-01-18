import { Box, Container, Grid, Item } from "@mui/material";
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { ShopBoxWrapper } from "../../styles/shop";

export const Shop = () => {
  
  return (
    <ShopBoxWrapper>
      {/* <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(PRODUCTS).map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Product data={product} key={product.id} />
          </Grid>
        ))}
      </Grid> */}
      {Array.from(PRODUCTS).map((product, index) => (
        <Product data={product} key={product.id} />
      ))}
    </ShopBoxWrapper>
  );
};
