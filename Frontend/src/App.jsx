import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Books from './pages/BooksPage'
import Confirm from './pages/OrderConfirmationPage'
import Error from './pages/Failed';
import Placed from './pages/PlacedOrder'
import Order from './pages/Orders'
import React from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path: "/main",element: <Main/>},
        {path: "/about",element: <About/>},
        {path: "/books",element: <Books/>},
        {path:"/books/:bookId",element:<Confirm/>},
        {path:"/error",element: <Error/>},
        {path:"/placed",element: <Placed/>},
        {path:'/order',element: <Order/>},
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App