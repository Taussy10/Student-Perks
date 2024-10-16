import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Fail from './Pages/Fail'

const App = () => {
  return (
    // <BrowserRouter >
    //   <Routes>
    //     <Route element={<Home/>} path='/home'  />
    //     <Route element={<Auth/>} path='/auth'  />
    //     <Route element={<Fail/>} path='/fail'  />
    //    </Routes>
    //   </BrowserRouter>

    <div className="App">
    <header className="App-header">
      <h1>Appwrite Google Auth Example</h1>
      <Auth />
    </header>
  </div> 
  )
}

export default App
