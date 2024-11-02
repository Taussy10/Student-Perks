import React,{useState , useEffect} from 'react'
import { loginUser  , getUser } from '../Appwrite/config'
import google from "../assets/img/Google-icon.png"
import logo from "../assets/img/logo.png"
const Auth = () => {
const [user, setUser] = useState("")

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
    <div className=' min-h-screen   flex  flex-col    items-center'>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <div className=' flex flex-col    items-center'>


<img src={logo} alt="logo"  className='   text-gray-800 h-60 mb-2   '/>
<div className=' flex flex-col gap-3 mb-40 '>
<h1 className='  ml-4 text-2xl font-bold text-blue-500  '>Why spend Money when you can Save it ? </h1>
<h1 className='  text-2xl text-blue-500 font-bold'>Discover hundreds of exclusive Student Perks!</h1>
</div>
</div>

<div onClick={loginUser} className='    ml-3 cursor-pointer shadow-2xl  bg-[#F3F4F6] w-[500px] h-24
 flex    justify-around items-center 
  rounded-3xl
'>
  <img src={google} alt= "Google-Icon" 
  className=' h-32 '
  />

<h1 className=' text-4xl font-semibold text-blue-500'>Signup with Google</h1>


</div>
        </>
      )}


 

    </div>
  )
}

export default Auth

{/* <div className=' min-h-screen   flex  flex-col    items-center'>
{/* {user ? (
  <>
    <p>Welcome, {user.name}!</p>
    <button onClick={logoutUser}>Logout</button>
  </>
) : (
  <button onClick={loginUser}>Login with Google</button>
)} */}

{/* <img src={logo} alt="logo"  className='   text-gray-800 h-full mb-2   '/>
<div className=' flex flex-col gap-3 mb-32 '>
<h1 className='  text-2xl font-bold text-blue-500  '>Why spend Money when you can Save it ? </h1>
<h1 className='  text-2xl text-blue-500 font-bold'>Discover hundreds of exclusive Student Perks!</h1>
</div>
<div className='  shadow-2xl  bg-[#F3F4F6] w-[500px] h-24
 flex    justify-around items-center 
  rounded-3xl
'>
  <img src={google} alt= "Google-Icon" 
  className=' h-32 '
  />

<h1 className=' text-4xl font-semibold text-blue-500'>Signup with Google</h1>


</div>


</div> */} 