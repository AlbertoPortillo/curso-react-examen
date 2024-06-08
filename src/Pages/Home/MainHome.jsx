import React, {useEffect} from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import Cards from './Component/Cards';

export default function MainHome() {
  const { productos, agregarProducto } = useOutletContext();

  useEffect(() => {
    console.log(productos)
  }, [productos])
  

  const handleRefresh = () => {
    console.log('refresh')
    return true
  }

  const handleNext = () => {
    console.log('quiero vertodo')
  }

  return (
    <Box width={'90%'} height={'100%'} marginX={'5%'} >
        <InfiniteScroll
          dataLength={productos.length} //This is important field to render the next data
          next={handleNext}
          hasMore={true}
          style={{ backgroundColor: 'blue', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1em', padding: '0 10%' }}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={handleRefresh}
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          {/* <SimpleGrid columns={2} spacing={10}> */}
            {productos.map((item) => ( <Cards data={item} addCar={agregarProducto} /> ) ) }
          {/* </SimpleGrid> */}
        </InfiniteScroll>
    </Box>
  )
}
