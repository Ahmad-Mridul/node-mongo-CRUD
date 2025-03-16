import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Users from './components/Users.jsx'
import Update from './components/Update.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/customers',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:3000/customers')
  },
  {
    path:"/customers/:id",
    element:<Update></Update>,
    loader:({params})=> fetch(`http://localhost:3000/customers/${params.id}`)
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
