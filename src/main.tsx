import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import Error from './Pages/Error.tsx';
import Auth from './Pages/Auth.tsx';
import { getUser } from './Appwrite/config.ts';
import Layout from './Layout.tsx';
import './index.css';
import Loading from './Components/Loading.tsx';

interface User {
  $id: string ,
  name: string ,
  email: string ,

}
const App = () => {
  const [user, setUser] = useState<User| null>(null);
  const [loading, setLoading] = useState(true); // To handle loading state while checking authentication

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading once the user status is checked
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return <Loading />
    // setTimeout(() => {
    //   <Loading /> 
    // }, 3000);
   
    // <div>Loading...</div>; // Display a loading message while checking user status
  }
  // loading in main 

  const router = createBrowserRouter(
    createRoutesFromElements(
      // all the routes are nested in the parent route and it's elment is layout
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route 
          // index 
          path='/'
          // index is use for parent route instead you can also use  path='/'
          element={user ? <Home id={0} name={'home'} /> : <Navigate to="/auth" replace />} 
          // if user is there then will go home otherwwise will go to /auth 
        />
        {/* Route takes two props: 
        1.Path: of the eg: /home
        2.Element: to show on that path <Home/> */}
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/" replace /> : <Auth />} 
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
