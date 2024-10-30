import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Fail from './Pages/Fail'
import Auth from './Pages/Auth'
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
      <Auth />
      {/* <Home /> */}
    
  </div> 
  )
}

export default App
