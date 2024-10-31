import React,{useState , useEffect} from 'react'
import { listData,  } from '../Appwrite/config'
import Header from '../Components/Home/Header'
import Navbar from '../Components/Home/Navbar'
// just run the function you will get the data
// but  how to display data
//{/* by using tailwind css h1 , h2 power end and all of them are p tag */}

const Home = () => {
  const [courseData, setCourseData] = useState([])
  // 1. Store the data by storing we can acces the data 
  // now we have to execute function the data will be shown in browser

  useEffect(() => {
    const fetchData = async () => {
    try {
    
        const listedData = await listData()
        // 1. store data in variable because we can't acces function data 
        //  now data is in listedData variable 
    
        // now store in useState for accesing it everwhere
        setCourseData(listedData)      
        // console.log("hello");
      }
      
      
   catch (error) {
      console.log(error , "getting error in listed data");
      
    }
  } 
    fetchData(); 

  }, [])

  // useEffect(() => {
  //   console.log(courseData , "Hello");
  // }, [courseData])
  
 
 



  

  return (
    <div className='    min-h-screen  bg-gray-500   '>

{/* For header and navbar */}
<div>
  <Header />
  <Navbar/>
</div>
 
 <div className= 'ml-24 mr-24  '   >
<div className=' flex flex-col   mb-12 '>
<h1 className=' text-center  font-bold text-4xl'>Education</h1>
<h1 className='  text-2xl'>Dive into a world of learning with discounted online courses, e-books, and study resources designed for students worldwide. Elevate your education without breaking the bank.</h1>
</div>













      {/* Courses div */}
      {/* To create a card
      1.  Define a box for card 
      */}

      {/* To  */}
 <div className=' flex  flex-row flex-wrap gap-8 bg-green-500 '>
   {
    courseData.map((item , index) => 
   
      <div key={index} className=' relative   h-[400px]  w-[350px]  overflow-hidden    bg-white shadow-md   rounded-xl    mb-8  ' >


        {/* For the background image */}
<div >


<img src= {item.courseBgImage} alt="bg-course-image" className='  h-56 object-cover  w-full' />
{/* This is parent realtive and it's child will work according to parent  */}
</div>

<div className='absolute h-24 w-24   top-44 left-32  bg-white    shadow-md rounded-lg p-1   flex flex-col justify-center items-center   '>
<img src= {item.courseLogo} alt="bg-course-image" className=' h-full w-full object-contain     '/>
</div>

{/* Card Content  */}
<div className='  text-center p-4 mt-16 '>
<p className=" text-xl text-indigo-600  font-semibold">{item.companyName}</p>
      <h3 className="text-lg font-bold mt-1">{item.desc}</h3>
</div>

</div>

    )

    
   }
    </div>




      </div>
    </div>
    // </div>
  )
}

export default Home