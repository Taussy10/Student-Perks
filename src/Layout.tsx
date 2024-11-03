import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Header from './Components/Home/Header'
import Footer from './Components/Home/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    {/* <Header/> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout