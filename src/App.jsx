
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import Table from './Table'
import Layout from './Layout';
import AddTransaction from './AddTransaction';
import AddCustomes from './AddCustomes';

// ! task add to transaction 
// ! task add customers 
// ! solve the Api

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Table /> },
        { path: 'Table/AddTransaction/:id/:customer_id', element: <AddTransaction /> },
        { path: 'AddCustomes', element: <AddCustomes /> },
      ],
    },
  ]);
  return (
    <>


      <RouterProvider router={router} />
    </>
  )
}

