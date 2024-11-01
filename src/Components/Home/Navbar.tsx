import React from 'react'

const Navbar = ({navItems , selectedCategory }) => {
  return (
    <div className=' p-6 bg-orange-300'>
    <div className=' flex flex-row   justify-around'>
      {
        navItems.map((item,index) => 
          
          <h1
          key={index}
          className={`text-xl font-semibold cursor-pointer  text-gray-900 ${selectedCategory === item ? "text-blue-500": " "} `}
          // onClick={() => selectedCategory(item)}
          >{item}
  
          </h1>
         
        )
      }
 
    </div>
    </div>
  )
}

export default Navbar