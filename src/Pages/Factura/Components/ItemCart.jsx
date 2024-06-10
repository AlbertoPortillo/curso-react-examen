import React, {useState} from 'react'
import { Box, Card, Heading, CardBody, CardFooter, Stack, Text, Image, Flex } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

export default function ItemCart({ name, description, price, image , quantity, addItem, removeItem}) {
    
    return (
        <Card marginY={'2%'} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image src={image} objectFit='cover' maxW={{ base: '100%', sm: '200px' }} alt={name} />
            <Stack width={'100%'}  >
                <CardBody>
                    <Heading size='md'>{name}</Heading>
                    <Text py='2'>{description}</Text>
                </CardBody>

                <CardFooter>
                    <Box width={'30%'} >
                        <Text color='black' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Box>
                    <Flex width={'70%'} height={'2rem'} alignItems={'center'} justifyContent={'right'} >
                        <AddIcon cursor={'pointer'} onClick={addItem} marginX={'5%'} />
                        <Text marginX={'5%'} > {quantity} </Text>
                        <MinusIcon cursor={'pointer'} onClick={removeItem} marginX={'5%'} />
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    )
}
