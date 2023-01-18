import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Shop } from "../../components/shop/shop";

export const HomePage = () => {
  return (
    <Box>
     <Navbar/>
     <Shop/> 
     </Box>
   
  );
};
