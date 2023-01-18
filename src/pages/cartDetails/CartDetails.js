import { Box } from '@mui/material'
import React from 'react';
import { Navbar } from '../../components/navbar/navbar';
import { Cart } from '../../components/cart/cart';

export const CartDetails = () => {
  return (
    <Box>
    <Navbar />
    <Cart />
  </Box>
  )
}
