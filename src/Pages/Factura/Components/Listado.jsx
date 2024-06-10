import React, {useEffect, useState} from 'react'
import { Box, Text, Button } from '@chakra-ui/react';
import {  Navigate } from "react-router-dom";

import ItemCart from './ItemCart';
export default function Listado({ items, completeFactura }) {
  const [ quantity, setQuantity ] = useState({});
  const [ refresh, setRefresh ] = useState(0);
  const [ sumaTotal, setsumaTotal ] = useState(0);
  const [ redir, setRedir ] = useState(false)

  function setFactura(){
    completeFactura()
    setRedir(true)
  }
  useEffect(() => {
    handleInitCart()
  }, [])

  useEffect(() => {
    sumTotal()
  }, [refresh])
  
  
  const handleInitCart = () => {
    let __list = {}
    for(const item of items){
      __list[item?.id] = 1
    }
    setQuantity(__list)
  }

  function sumTotal(){
    let calculo = 0;
    for(const item of items){
      calculo += Number(item.cost) * (quantity[item?.id] || 1 )
    }
    setsumaTotal(calculo)
  }

  const handleAdd = (key) => {
    const productos = quantity;
    productos[key] = productos[key] < 1 ?1 :productos[key] + 1;
    setQuantity(productos);
      //Razon de esto aqui: Por alguna razon no se actualizaba el estado del carro, por agregar productos
    setRefresh(refresh + 1) 
  }

  const handleMinus = (key) => {
    const productos = quantity;
    productos[key] = productos[key] < 1 ?0 :productos[key] - 1;
    setQuantity(productos);
      //Razon de esto aqui: Por alguna razon no se actualizaba el estado del carro, por agregar productos
    setRefresh(refresh + 1)
  }

  return (
    <>
      <Box padding={'3%'} height={'80%'} width={'100%'} overflow={'auto'} >
          { items?.map((item, key) => 
            <ItemCart 
              addItem={() => handleAdd(item?.id)} 
              removeItem={() => handleMinus(item?.id)} 
              name={item?.name} 
              description={item?.description} 
              quantity={quantity[item?.id] || 1} 
              price={item?.cost} 
              image={item?.portada} 
              />) 
            }
      </Box>
      <Box height={'20%'}>
        <Text fontSize={'6xl'}>Total:  ${sumaTotal} </Text>
        {
          items?.length > 0 
          ?<Button onClick={setFactura} variant='outline' colorScheme='blackAlpha' size='lg'>Pagar</Button>
          :null
        }        
      </Box>
      { redir && (<Navigate to='/' replace={true} />) }

    </>
  )
}
