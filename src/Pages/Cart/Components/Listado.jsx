import React, {useEffect, useState} from 'react'
import { Box, Text, Button } from '@chakra-ui/react';
import { Link, Navigate } from "react-router-dom";

import ItemCart from './ItemCart';
export default function Listado({ items, facturar }) {
  const [ redir, setRedir ] = useState(false)

  function setFactura(){
    facturar()
    setRedir(true)
  }
  return (
    <>
      <Box padding={'3%'} height={'80%'} width={'100%'} overflow={'auto'} >
          { items?.map((item, key) => 
            <ItemCart 
              name={item?.name} 
              description={item?.description} 
              price={item?.cost} 
              image={item?.portada} 
              />) 
            }
      </Box>
      <Box height={'20%'} padding={'5%'} textAlign={'right'} >
        {
          items.length > 0 
          ?<Button onClick={setFactura} variant='outline' colorScheme='blackAlpha' size='lg'>Pagar</Button>
          :null
        }        
      </Box>
      { redir && (<Navigate to='/factura' replace={true} />) }
    </>
  )
}
