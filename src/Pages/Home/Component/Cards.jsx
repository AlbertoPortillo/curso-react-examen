import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Divider, Button, Image } from '@chakra-ui/react'

export default function Cards({ data, addCar }) {
  return (
    <Card bg={'red'} maxW='sm' key={data?.id} >
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
            <Text color='blue.600' fontSize='2xl'>
                {data?.cost}
            </Text>
            </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
        </CardFooter>
    </Card>
  )
}
