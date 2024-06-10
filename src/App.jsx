import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Layout from './Layout/Layout'
import MainHome from './Pages/Home/MainHome';
import MainCart from './Pages/Cart/MainCart';
import MainDetails from './Pages/Details/MainDetails';
import MainFactura from "./Pages/Factura/MainFactura";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}  >
      <Route index={true} key={'main-home-screen'} element={<MainHome key={'main-home-screen'} />} />
      <Route path="dashboard" element={<Navigate to="/"/>} />
      <Route path="cart" element={<MainCart key={'cartScreen'} />} />
      <Route path="factura" element={<MainFactura key={'facturaScreen'} />} />
      <Route path="/producto/:id" element={ <MainDetails key={'detailsScreen'} />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider key={'router-main-router'} router={router} />
    </ChakraProvider>
  )
}

export default App
