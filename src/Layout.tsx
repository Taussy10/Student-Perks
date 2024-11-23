

// import Footer from './Components/Home/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    {/* <Header/> */}
    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default Layout