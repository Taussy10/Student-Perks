  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter , Router, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Error from './Pages/Error.tsx'
import Test from './Pages/Test.tsx'
import Auth from './Pages/Auth.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/auth",
    element: <Auth/>
  },
  {
    path: '/error',
    element: <Error/>
  }
 
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
    {/* <App /> */}
    {/* </RouterProvider> */}
  </StrictMode>
)
