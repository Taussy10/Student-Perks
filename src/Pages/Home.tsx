import React from 'react'

//{/* by using tailwind css h1 , h2 power end and all of them are p tag */}

const Home = () => {


  const bgImage = "https://cloud.appwrite.io/v1/storage/buckets/672103ef00154b687be2/files/672128c90038b95e0cf0/view?project=670f793200296470b5b2&project=670f793200296470b5b2&mode=admin"
  const courseImage = "https://cloud.appwrite.io/v1/storage/buckets/672103ef00154b687be2/files/6721b06c00181948ee7d/view?project=670f793200296470b5b2&project=670f793200296470b5b2&mode=admin"
  return (
    <div className='    min-h-screen  bg-gray-500   '>
 
 <div className= 'ml-24 mr-24  '   >


<div className=' flex flex-col   mb-12 '>
<h1 className=' text-center  text-4xl'>Education</h1>
<h1 className='  text-2xl'>Dive into a world of learning with discounted online courses, e-books, and study resources designed for students worldwide. Elevate your education without breaking the bank.</h1>
</div>














      {/* Courses div */}
      {/* To create a card
      1.  Define a box for card 
      */}
      <div className=' relative   h-[400px]  w-[350px]  overflow-hidden    bg-white shadow-md   rounded-xl  ' >
   
   {/* For the background image */}
<div >
<img src= {bgImage} alt="course-image" className=' w-full h-full' />
{/* This is parent realtive and it's child will work according to parent  */}
</div>

<div className='absolute h-24 w-24   top-36 left-28  bg-white   shadow-md rounded-lg p-1   flex flex-col justify-center items-center   '>
<img src= {courseImage} alt="bg-course-image" className='    object-contain     '/>
</div>

{/* Card Content  */}
<div className='  text-center p-4 mt-10 '>
<p className=" text-xl text-indigo-600  font-semibold">AMAZON WEB SERVICES</p>
        <h3 className="text-lg font-bold mt-1">Learn Cloud Skills with AWS Educate</h3>
</div>




      </div>
    </div>
    </div>
  )
}

export default Home