import React, { useState, useEffect } from 'react';
import { listData } from '../Appwrite/config';
import Header from '../Components/Home/Header';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const nav = ["All", "Education", "Software & Tools", "Entertainment", "Health & Wellbeing", "Shopping"];
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listedData = await listData();
        setCourseData(listedData);
      } catch (error) {
        console.log(error, "getting error in listed data");
      }
    };
    fetchData();
  }, []);

  const filteredData = selectedCategory === "All" 
    ? courseData 
    : courseData.filter(item => item.Category === selectedCategory);

  return (
    <div className='min-h-screen bg-gray-500'>
      {/* Header and Navbar */}
      <Header />
      <div className='p-6 bg-orange-300'>
        <div className='flex flex-row justify-around'>
          {nav.map((category) => (
            <h1
              key={category}
              className={`text-xl font-semibold text-gray-900 cursor-pointer ${selectedCategory === category ? "text-blue-500" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </h1>
          ))}
        </div>
      </div>

      <div className='ml-40 mr-40'>
        <div className='flex flex-col mb-12'>
          <h1 className='text-center font-bold text-4xl'>{selectedCategory}</h1>
        </div>

        {/* Courses div */}
        <div className='flex flex-row justify-around p-4 flex-wrap bg-green-500'>
          {filteredData.map((item, index) => (
            <a key={index} target='blank' rel="noopener" href={item.PerkLink}>
              <div className='relative h-[450px] w-[320px] overflow-hidden bg-white shadow-xl rounded-2xl mb-8'>
                <div>
                  <img src={item.courseBgImage} alt="bg-course-image" className='h-56 object-cover w-full' />
                </div>
                <div className='absolute h-24 w-24 top-44 left-32 bg-white shadow-md rounded-lg p-1 flex flex-col justify-center items-center'>
                  <img src={item.courseLogo} alt="bg-course-image" className='h-full w-full object-contain' />
                </div>
                <div className='text-center p-4 mt-12'>
                  <p className="text-2xl text-blue-600 font-bold">{item.companyName}</p>
                  <h3 className="font-semibold mt-3 text-xl">{item.desc}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
