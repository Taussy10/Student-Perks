import React from 'react'
import { useNavigate , Link } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='     bg-white shadow-lg flex  justify-center p-2 '>      
     
     <h1 className=' font-semibold' >Made with 💙 by <a className=' font-bold  text-blue-500 ' target="_blank" rel='noopener' href="https://www.youtube.com/">Tausif</a>
     </h1>
        
        
        
    </div>
  )
}

export default Footer