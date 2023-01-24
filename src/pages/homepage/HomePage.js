import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Shop } from "../../components/shop/shop";
import { Footer } from "../../components/footer/footer";
import './HomePage.css';

export const HomePage = () => {
  return (
   <div className="homeContainer">
     <Navbar/>
     <Shop/> 
     <Footer />
     </div>
   
  );
};
