import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Fail from './Pages/Error'
import Auth from './Pages/Auth'
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Home id={0} name={'home'}/>} path='/home'  />
        <Route element={<Auth/>} path='/auth'  />
        <Route element={<Fail/>} path='/fail'  />
       </Routes>
      </BrowserRouter>

  //   <div className="App">
  //     {/* <Auth /> */}
  //     <Home />
    
  // </div> 
  )
}

export default App
