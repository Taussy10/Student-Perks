import React from 'react'

//{/* by using tailwind css h1 , h2 power end and all of them are p tag */}

const Home = () => {
  return (
    <div className='   bg-blue-500   '>
 
 <div className= 'ml-24 mr-24  '   >


<div className=' flex flex-col   mb-12 '>
<h1 className=' text-center  text-4xl'>Education</h1>
<h1 className='  text-2xl'>Dive into a world of learning with discounted online courses, e-books, and study resources designed for students worldwide. Elevate your education without breaking the bank.</h1>
</div>

















      {/* Courses div */}
      <div className='  h-[500px]  w-[360px]   bg-green-500 rounded-md ' >
   
<img src="https://cloud.appwrite.io/v1/storage/buckets/672103ef00154b687be2/files/672128c90038b95e0cf0/view?project=670f793200296470b5b2&project=670f793200296470b5b2&mode=admin" alt="course-image" className='' />

<div className='absolute h-32 w-32  left-52  bg-white   '>

<img src="https://cloud.appwrite.io/v1/storage/buckets/67211e14002cf6068587/files/67211f0a0026f21a9e9b/view?project=670f793200296470b5b2&project=670f793200296470b5b2&mode=admin" alt="bg-course-image"

className='     '/>
</div>


      </div>
    Homes
    </div>
    </div>
  )
}

export default Home