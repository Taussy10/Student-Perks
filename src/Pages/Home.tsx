import React from 'react'
import {loginWithGoogle ,  logoutUser  , getUser , session } from "./Suth.js"

const Home = () => {
  return (
    <div>
    Home
    <button onClick={logoutUser} > Logout it  </button>
    </div>
  )
}

export default Home