import React,{useState , useEffect} from 'react'
import { listData,  } from '../Appwrite/config'
import Header from '../Components/Home/Header'
import Navbar from '../Components/Home/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Home/Footer'

// just run the function you will get the data
// but  how to display data
//{/* by using tailwind css h1 , h2 power end and all of them are p tag */}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  // by default ALL 
  const navItems = ["Popular", "Education", "Software & Tools", "Entertainment", "Health & Wellbeing", "Shopping"];
  const [courseData, setCourseData] = useState([])
  // 1. Store the data by storing we can acces the data 
  // now we have to execute function the data will be shown in browser

  const [searchQuery, setSearchQuery] = useState("");
// created a state for saving the searchQueries (let's say Notion)
  useEffect(() => {
    const fetchData = async () => {
    try {
    
        const listedData = await listData()
        // 1. store data in variable because we can't acces function data 
        //  now data is in listedData variable 
    
        // now store in useState for accesing it everwhere
        setCourseData(listedData)  
        // dta inside courseData array 
      }
      
      
   catch (error) {
      console.log(error , "getting error in listed data");
      
    }
  } 
    fetchData(); 

  }, [])



  

 // Filtering data based on selectedCategory and searchQuery(that yous searched)
 const filteredData = courseData.filter(item => 
  ( item.Category.trim() === selectedCategory) &&
  item.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  // so here companyName to lowercase then searchQuery to lowerCase then by includes wheter both are same or not 
);




//   const isMicrosoftPresent = courseData.some(item => item.companyName === "MICROSOFT");
// console.log(isMicrosoftPresent); // true if found, false if not
console.log(courseData , "got the data");


  return (
    <div className='    min-h-screen  bg-[#F3F4F6]   pb-16   '>

{/* For header and navbar */}
<div>
  <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

<Navbar  navItems={navItems} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />


 
 <main className= 'ml-40 mr-40  '   >

{/* <div className=' flex flex-col   mb-12 '>
<h1 className=' text-center  font-bold text-4xl'>Education</h1>
<h1 className='  text-2xl'>By being a student you can getperks</h1>
</div> */}





      {/* Courses div */}
      {/* To create a card
      1.  Define a box for card 
      */}

      {/* To  */}
 <div className='  flex   flex-row  justify-around p-4 flex-wrap     gap-5  '>
 
   {
    
    filteredData.map((item , index) => 
      // {

      // }
      <a key={index} target='blank' rel="noopener" href= {item.PerkLink}>
{/* rel is for security purposes */}


 <div  className=' relative     h-full w-[320px]    flex flex-col      justify-between   overflow-hidden    bg-white  shadow-xl    rounded-2xl    mb-8  ' >

                {/* For the background image */}
<div >
<img src= {item.courseBgImage} alt="bg-course-image" className='  h-56 object-cover  w-full' />
{/* This is parent realtive and it's child will work according to parent   */}
</div>

<div className='absolute h-24 w-24   top-44 left-32  bg-white    shadow-md rounded-lg p-1   flex flex-col justify-center items-center   '>
<img src= {item.courseLogo} alt="bg-course-image" className=' h-full w-full object-contain     '/>
</div>

{/* Card Content  */}
<div className='  text-center p-4 mt-12  '>
<p className=" text-2xl text-blue-600  font-bold">{item.companyName}</p>
      <h3 className=" font-semibold mt-5 text-xl">{item.desc}</h3>
      {/* <h3 className=" font-semibold mt-3 text-xl"> Elevate your education without breaking the bank.Get unlimited pages & blocks, file uploads.</h3> */}
      {/* <h3 className=" font-semibold mt-3 text-xl">Get Notion Plus plan for free</h3> */}
</div>

</div>
     </a>


    )

    
   }


  
    </div>




      </main>
      <div className='  fixed bottom-0  w-full   '>

      <Footer/>
      </div>
    </div>
     </div>
  )
}

export default Home