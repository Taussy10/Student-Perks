import React from 'react';

const Navbar = ({ setSelectedCategory }) => {
  const categories = ["Popular", "Education", "Software & Tools", "Entertainment", "Health & Wellbeing", "Shopping"];

  return (
    <div className='p-6 bg-orange-300'>
      <div className='flex flex-row justify-around'>
        {categories.map((category) => (
          <h1
            key={category}
            className='text-xl font-semibold text-gray-900 cursor-pointer'
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
