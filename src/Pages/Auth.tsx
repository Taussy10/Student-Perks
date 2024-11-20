import React,{useState , useEffect} from 'react'
import { loginUser  , getUser } from '../Appwrite/config'
import google from "../assets/img/Google-icon.png"
import logo from "../assets/img/logo.png"
import { FcGoogle } from "react-icons/fc";
import { useAuth , name } from '../Contexts/AuthContexts';
// make sure that if you working it ts then work only in ts not js 
// cause both thigns don't work each other together 

const Auth = () => {
const [user, setUser] = useState(null)

useEffect(() => {
  const checkUser = async () => {
    try {
   const userData = await getUser()
      setUser(userData)
    } catch (error) {
      // setUser(null)
      console.log(error);
      
    }
  }

  checkUser()
}, [])




  return (
    <div className=' min-h-screen    flex  flex-col    items-center'>
      {user ? (
        <>
          <p>Welcome, bro!</p>
        </>
      ) : (
       <>
<div className=' flex flex-col    items-center'>


<img src={logo} alt="logo"  className='   text-gray-800 h-60 mb-2  bg-green-500  '/>

<div className=' ml-8 mr-5 flex flex-col gap-3 mb-40 '>
<h1 className='   text-2xl sm:text-3xl font-bold text-blue-500 '>Why spend Money when you can Save it ? </h1>
<h1 className='  text-xl sm:ml-10 sm:text-2xl text-blue-500 font-bold'>Discover hundreds of exclusive <span className=' font-bold'>Student Perks!</span> </h1>
</div>
</div>

<button  onClick={loginUser}  className=" mb-1 shadow-lg bg-[#F3F4F6] w-full  sm:w-[500px] sm:h-24  p-2 sm:p-3 flex items-center justify-center rounded-2xl  gap-2 sm:gap-4 "   >
                             {/*
                             */}

<FcGoogle   className=' text-5xl  '  />
<h1 className=' sm:text-4xl font-bold text-2xl text-blue-500'>Signup with Google</h1>


</button>
</> 
      )}


 

    </div>
  )
}

export default Auth



