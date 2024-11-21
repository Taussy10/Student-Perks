import { FC, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
  navItems: string[]; // An array of strings
  selectedCategory: string; // A string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>; // A function to update state
}


const Navbar:FC<NavbarProps> = ({ navItems , selectedCategory, setSelectedCategory }) => {
  // State to control hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='p-4 bg-white'>
      {/* Desktop Navbar */}
      <div className='hidden md:flex flex-row justify-around'>
        {navItems.map((item, index) => (
          <h1
            key={index}
            className={`text-xl font-semibold cursor-pointer ${selectedCategory === item ? 'text-blue-500' : 'text-black'}`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </h1>
        ))}
      </div>

      {/* Hamburger Icon for small screens */}
      <div className='md:hidden flex items-center justify-between'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          className='text-xl p-2'
        >
  <GiHamburgerMenu 
  //  className= {` ${setIsMenuOpen(true) ? "text-2xl":"text-8xl"  }`} 
  className={`${isMenuOpen ? ' text-blue-500 text-2xl' : ' text-black'} transition-all`} /> 
{/* bydefault false rahega then if click krega to true rahega so isMenuOpen is true */}

        </button>
      </div>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex-col items-center mt-4`}
      >
        {navItems.map((item, index) => (
          <h1
            key={index}
            className={`text-xl font-semibold cursor-pointer ${selectedCategory === item ? 'text-blue-500 ' : 'text-black'} transition-all mb-4`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Navbar;












// const Navbar = ({navItems , selectedCategory ,setSelectedCategory }) => {
//   return (
//     <div className=' p-4 bg-white '>
//     <div className=' flex flex-row   justify-around    '>
//       {                  

//         navItems.map((item,index) => 
//           <h1
//           key={index}
          // className={`text-xl font-semibold cursor-pointer   ${selectedCategory === item ? "text-blue-500": "text-black "} `}
//           onClick={() => setSelectedCategory(item)}
//           >
//             {item}
  
//           </h1>
         
//         )
//       }
 
//     </div>
// </div>
//   )
// }

// export default Navbar