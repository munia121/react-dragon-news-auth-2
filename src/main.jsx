import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Roters/Routers.jsx'
import DataContext from './components/context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext><RouterProvider router={router} /></DataContext>
  </React.StrictMode>,
)
