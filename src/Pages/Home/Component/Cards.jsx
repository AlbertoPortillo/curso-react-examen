import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Divider, Button, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function Cards({ data, addCar, idList }) {
    const [added, setAdded] = useState(false)

    const handleAdded = () => {
        addCar()
        setAdded(true)
    }
  return (
    <Card bg={'grey'} border={'solid'} maxW='sm' key={data?.id} >
        <CardBody>
            <Image
            src={data?.portada}
            alt={data?.name}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{data?.name}</Heading>
            <Text>
                {data?.description}
            </Text>
            <Text color='white' fontSize='2xl'>
                ${data?.cost}
            </Text>
            </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
            {
                added 
                ?null
                :<Button onClick={handleAdded} variant='ghost' color='white'>
                    Add to cart
                </Button>
                
            }
            <Link to={`/producto/${idList}`}>
                <Button onClick={handleAdded} variant='ghost' color='white'>
                    Details
                </Button>
            </Link>
        </CardFooter>
    </Card>
  )
}
