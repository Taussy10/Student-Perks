  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter , Router, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Error from './Pages/Error.tsx'
import Test from './Pages/Test.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/education",
    element: <Home/>
  },
  // {
  //   path: '/:id',
  //   element: <Test/>
  // }
 
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
    {/* <App /> */}
    {/* </RouterProvider> */}
  </StrictMode>
)
