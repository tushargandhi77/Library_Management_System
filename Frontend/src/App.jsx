import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Books from './pages/BooksPage'
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
        {path: "/books",element: <Books/>}
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App