import React, { useState, useEffect } from 'react'
import { Outlet, useLocation, redirect } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  Spacer,
  Text,
  Image
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

import logoIcon from '../assets/Logo.png'
import carIcon from '../assets/car.png';
import homeIcon from '../assets/homeIcon.png';
import { data } from '../../data/data';

export default function Layout() {
  const [ carrito, setCarrito ] = useState([]);
  const [ items, setItems ] = useState( []);
  const lastPage = Math.round(data.length / 10);
  const location = useLocation(); // react-router-dom
  const [ refresh, setRefresh ] = useState(0);

  const [facturalist, setFacturaList] = useState(null)

  useEffect(() => {
    setPagination()
  }, [data])

  const setPagination = (page = 1) => {
    setItems(data.slice( page - 1, page * 10 ))
  }

  const agregarProductoCarrito = (producto) => {
    const newCarrito = carrito;
    newCarrito.push(producto);
    setCarrito(newCarrito)
    //Razon de esto aqui: Por alguna razon no se actualizaba el estado del carro, por agregar productos
    setRefresh(refresh + 1) 
  }

  const borrarProductoCarrito = (id) => {
    const newCarrito = carrito;
    newCarrito.filter((producto) => producto.id == id)
    setCarrito(newCarrito)
    //Razon de esto aqui: Por alguna razon no se actualizaba el estado del carro, por agregar productos
    setRefresh(refresh + 1) 
  }

  const limpiarCarrito = () => {
    setCarrito([])
  }

  const handleFacturacion = () =>{
    const copiaCarrito = carrito;
    setFacturaList(copiaCarrito)
    setCarrito([])
  }
  
  const limpiarFacturacion = () => {
    setFacturaList([])
  }

  return (
    <Box width={'99vw'} height={'100vh'}>
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
              <Link  to="/cart">
                <Box>
                  <Image position={'relative'} textAlign={'center'} filter={'invert(1)'} src={carIcon} width={'2.5rem'} height={'2.5rem'} objectFit={'fill'} alt='Cart' />
                  <Text position={'absolute'} bg={'white'} borderRadius={'md'} top={'0rem'} right={'2.5rem'} color='tomato' paddingX={'.3rem'} fontSize='xl'>{carrito.length == 0 ?'' :carrito.length}</Text>
                </Box>
              </Link>
          </Stack>
        </Box>
      </Flex>
      <Box width={'100%'} height={'90%'}>
        <Outlet key={location.pathname} context={{
          productos: items,
          carrito: carrito, 
          borrarCarrito: limpiarCarrito, 
          borrarProducto: borrarProductoCarrito,
          agregarProducto: agregarProductoCarrito,
          pagination: setPagination,
          lastPage: lastPage,
          facturaLista: facturalist,
          facturarCarrito: handleFacturacion,
          borrarFacturacion: limpiarFacturacion
        }} />
      </Box>
    </Box>
  )
}
