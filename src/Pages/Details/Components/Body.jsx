import { Flex, Image, Box, Text, Heading, Button } from '@chakra-ui/react'
import React, {useState} from 'react'

export default function Body({ img, name, descripcion, precio, addCarrito }) {
  const [added, setAdded] = useState(false)
  const handleCarrito = () => {
    addCarrito()
    setAdded(true)
  }
  return (
    <Flex borderRadius={'25px'} width={'100%'} border={'solid'} >
        <Image width={'30%'} height={'25rem'} borderRadius={'25px'} src={img} />
        <Box padding={'2%'}>
            <Heading height={'20%'}>{name}</Heading>
            <Text overflow={'hidden'} height={'60%'} >{descripcion}</Text>
            <Flex height={'20%'} >
              <Heading width={'50%'} >{precio}</Heading>
              {
                added
                ?null
                :<Button onClick={handleCarrito} width={'50%'}> Agregar al Carrito </Button>
              }
            </Flex>
        </Box>
    </Flex>
  )
}
