import {useState , useEffect} from 'react'
import { loginUser  , getUser } from '../Appwrite/config'
import logo from "../assets/img/logo.png"
import { FcGoogle } from "react-icons/fc";
import Footer from '../Components/Home/Footer';
// make sure that if you working it ts then work only in ts not js 
// cause both thigns don't work each other together 


interface User {
  $id: string;
  name: string;
  email: string;
  prefs?: Record<string, any>; // Adjust based on the Appwrite prefs type
}
// You have to provide types 

const Auth = () => {
  const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  const checkUser = async () => {
    try {
   const userData = await getUser()
   if (user != null) {
    setUser(userData)
   }
    } catch (error) {
      console.log(error);
    }
  }

  checkUser()
}, [])








  return (
    <div className=' min-h-screen  bg-[#F3F4F6]   flex  flex-col    items-center'>
      {user ? (
        <>
          <p>Welcome, bro!</p>
        </>
      ) : (
       <>
<div className=' flex flex-col    items-center'>


<img src={logo} alt="logo"  className='   text-gray-800 h-60 mb-2  '/>

<div className=' ml-8 mr-5 flex flex-col gap-3 mb-40 '>
<h1 className='   text-2xl sm:text-3xl font-bold text-blue-500 '>Why spend Money when you can Save it ? </h1>
<h1 className='  text-xl sm:ml-10 sm:text-2xl text-blue-500 font-bold'>Discover hundreds of exclusive <span className=' font-bold'>Student Perks!</span> </h1>
</div>
</div>

<button  onClick={loginUser}  className=" mb-1 shadow-lg   bg-white  w-[300px]  sm:w-[500px] sm:h-24  p-2 sm:p-3 flex items-center justify-center rounded-2xl  gap-2 sm:gap-4 "   >
                             {/*
                             */}

<FcGoogle   className=' text-5xl  '  />
<h1 className=' sm:text-4xl font-bold text-2xl text-blue-500'>Signup with Google</h1>


</button>
<div className='  fixed bottom-0  w-full   '>

<Footer/>
</div>
</> 
      )}


 

    </div>
  )
}

export default Auth



