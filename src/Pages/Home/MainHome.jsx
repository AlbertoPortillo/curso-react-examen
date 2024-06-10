import React, {useEffect, useState} from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import Cards from './Component/Cards';

export default function MainHome() {
  const { productos, agregarProducto, pagination, lastPage } = useOutletContext();
  const [ page, setPage ] = useState(1)

  const handleRefresh = () => {
    return true
  }

  const handleNext = () => {
    let actualpage = page;
    if(actualpage < lastPage){
      actualpage++;
      setPage(actualpage)
      pagination(actualpage)
    }
    return;
  }

  return (
    <Box id='ScrolleableDiv' overflow={'scroll'} width={'90%'} height={'100%'} marginX={'5%'} >
        <InfiniteScroll
          dataLength={productos.length} //This is important field to render the next data
          next={handleNext}
          scrollableTarget='ScrolleableDiv'
          hasMore={true}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1em', padding: '3% 5%'}}
          loader={ page < lastPage ?<h4>Loading...</h4> :null}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={handleRefresh}
        >
            {productos.map((item, key) => ( <Cards key={item.id} data={item} addCar={() => agregarProducto(item)} idList={key} /> ) ) }
        </InfiniteScroll>
    </Box>
  )
}
