import React from 'react'
import Logo from "../../assets/img/Header.png"

const Header = () => {


  return (
    <div className=' p-4 bg-yellow-300'>
  <div className=' bg-blue-400 flex  mr-16 ml-16   justify-between   items-center  flex-wrap'>

        <img src={Logo} alt="" className=' h-full w-48' />

<h1 className=' text-3xl   font-semibold'>Student Perks</h1>
<div className=' '>

<input type="text"
placeholder='Search the Perks'
className=' bg-[#F3F4F6]  text-white  pr-5 pl-5 p-2     outline-none rounded-2xl'
/>
</div>
    
</div>
        
    </div>
  )
}

export default Header