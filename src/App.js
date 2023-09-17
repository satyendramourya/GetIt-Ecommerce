import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer'
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";

import { productsData } from "./api/Api";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import Login from "./pages/Login";


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login />
      },
      
    ]
  },
])


function App() {
  return (
    <h1 className="font-bodyFont">
      <RouterProvider router={router}>
      </RouterProvider>
    </h1>
  );
}

export default App;
