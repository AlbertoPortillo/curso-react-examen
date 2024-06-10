import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom';
import { Box, Text, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'

import Body from './Components/Body';

export default function MainDetails() {
  const {id} = useParams();
  const { productos, agregarProducto } = useOutletContext();
  const [ item, setItems ] = useState(null)
  
  useEffect(() => {
    if(id){
      setItems(productos[id])
    }
  }, [id, productos])
  

  return (
    <Box height={'100%'} width={'100%'} padding={'2.5% 5%'}>
      <Box padding={'1%'} width={'100%'}>
          <Link to='/'>
            <ArrowBackIcon boxSize={10} />
          </Link>
      </Box>
      { 
        item 
        ?<Body addCarrito={() => agregarProducto(item)} img={item.portada} name={item.name} descripcion={item.description} precio={item.cost} />
        :null
      }
    </Box>
  )
}
