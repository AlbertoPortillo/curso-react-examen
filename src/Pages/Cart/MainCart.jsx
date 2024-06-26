import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';

import Listado from './Components/Listado';
export default function MainCart() {
  const { carrito, facturarCarrito } = useOutletContext();

  return (
    <Box height={'100%'} padding={'2.5% 15%'}>
      <Listado facturar={facturarCarrito} items={carrito} />
    </Box>
  )
}