import { Browser } from 'appwrite'
import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Home/>} path='/'  />
        <Route element={<Auth/>} path='/auth'  />
      </Routes>
      </BrowserRouter>
  )
}

export default App
