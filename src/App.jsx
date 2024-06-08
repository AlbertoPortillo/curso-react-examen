import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Layout from './Layout/Layout'
import MainHome from './Pages/Home/MainHome';
import MainCart from './Pages/Cart/MainCart';
import MainDetails from './Pages/Details/MainDetails';

const router = createBrowserRouter([
  {
    element: <Layout />,
    path:"/",
    children:[
      {
        index: true, 
        element: <MainHome />
      },
      {
        path: "/dashboard",
        element: <Navigate to="/"/>
      },
      {
        path: "/cart",
        element: <MainCart/>
      },
      {
        path: "/billing",
        element: <Navigate/>
      },
      {
        path: "/producto/:id",
        element: <MainDetails/>
      },
    ]
  },
]);

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
