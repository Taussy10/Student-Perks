import React from 'react'

const Navbar = ({navItems , selectedCategory ,setSelectedCategory }) => {
  return (
    <div className=' p-4 bg-white '>
    <div className=' flex flex-row   justify-around flex-wrap'>
      {                  

        navItems.map((item,index) => 
          <h1
          key={index}
          className={`text-xl font-semibold cursor-pointer   ${selectedCategory === item ? "text-blue-500": "text-black "} `}
          onClick={() => setSelectedCategory(item)}
          >
            {item}
  
          </h1>
         
        )
      }
 
    </div>
</div>
  )
}

export default Navbar