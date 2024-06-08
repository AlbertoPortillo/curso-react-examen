import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  Spacer,
  Button,
  Image
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

import logoIcon from '../assets/Logo.png'
import carIcon from '../assets/car.png';
import homeIcon from '../assets/homeIcon.png';
import { data } from '../../data/data';

export default function Layout() {
  const [carrito, setCarrito] = useState([]);
  const [ items, setItems ] = useState( []);

  useEffect(() => {
    setItems(data)
  }, [data])
  

  const agregarProductoCarrito = (producto) => {
    const newCarrito = carrito;
    newCarrito.push(producto);
    setCarrito(newCarrito)
  }

  const borrarProductoCarrito = (id) => {
    const newCarrito = carrito;
    newCarrito.filter((producto) => producto.id == id)
    setCarrito(newCarrito)
  }

  const limpiarCarrito = () => {
    setCarrito([])
  }

  return (
    <Box bg={'white'} width={'100vw'} height={'100vh'}>
            <Flex bg={'gray'} width={'100%'} h="10%" px={4} alignItems={'center'} justifyContent={'space-between'}>
                    <Box p='4'>
                      <Image width={'7rem'} height={'2rem'} objectFit={'fill'} src={logoIcon} alt='GameStop' />
                    </Box>

                    <Spacer />
                    
                    <Box>
                      <Stack direction={'row'} p='4' spacing={7}>
                          <Link to="/">
                            <Image filter={'invert(1)'} src={homeIcon} width={'2.5rem'} height={'2.5rem'} objectFit={'fill'} alt='Cart' />
                          </Link>
                          <Link  to="/">
                            <Image filter={'invert(1)'} src={carIcon} width={'2.5rem'} height={'2.5rem'} objectFit={'fill'} alt='Cart' />
                          </Link>
                      </Stack>
                    </Box>
            </Flex>
        <Box width={'100%'} height={'90%'}>
          {/* <Outlet context={[items, carrito, limpiarCarrito, borrarProductoCarrito, agregarProductoCarrito]} /> */}
          <Outlet context={{
            productos: items,
            carrito: carrito, 
            borrarCarrito: limpiarCarrito, 
            borrarProducto: borrarProductoCarrito,
            agregarProducto: agregarProductoCarrito
          }} />
        </Box>
    </Box>
  )
}
