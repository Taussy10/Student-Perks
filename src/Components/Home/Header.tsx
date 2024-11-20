import React,{useState , useEffect} from 'react'
import Logo from "../../assets/img/Logo.png"
import { addData } from '../../Appwrite/config'
import {  account , getUser } from '../../Appwrite/config'
// import user from '../../Pages/Auth'

import { NavLink, useNavigate } from 'react-router-dom'
const Header = ({searchQuery , setSearchQuery }) => {
const [value, setValue] = useState(null)
const [user, setUser] = useState(null)
const navigate = useNavigate()

// Why do we use useEffect ?
// so that whenever we visit page then it a function should 
// execute by default(basically by side effect) that fun is genrally API call 
// then you can store to do your work 

useEffect(() => {
  // make sure that you make async so that function only execute when data get call
async function  fetchUser () {
 const  userId= await getUser();
  setUser(userId)

}

fetchUser()

}, [])

console.log(user, "got the user");


// make sure to check the user
// because we got in object form so we have to use object property



if (user) {
  console.log("User ID:", user.$id);
  console.log("User Name:", user.name); // Adjust these property names based on actual structure
}
// the data we get by promise is in array so we can't use arrays method to sue


// console.log(user);

// You have declre useNavigate here 
//   function getInputData(val: string) {

// //  console.warn(val.target.value)
// //     // by this we get some console in which target named key has
// //     // targeted value as input so we will take that
// //     // and we target that value = that is input value

// //     setValue(val.target.value)
//   }

// What is async await and try catch function



const logoutUser = async() => {
  try {
    await account.deleteSession('current')
    window.location.reload()
    // after deleting session the page will refresh itself 
    navigate('/auth')
    // and navigate to auth page 
  } catch (error) {
    console.log(error , "Getting error while authrization");
    
  }
}


  return (
    <div className='   bg-white'>
      
            
      {/* <button className=' w-36 h-12 bg-blue-500 text-white font-bold text-xl rounded-xl  ' onClick={logoutUser}>
              <h1>Logout User</h1>
              </button>
            <button className='text-xl ' onClick={addData}>Add data</button> */}


  <div className=' bg-white flex  mr-16 ml-16   justify-between   items-center  flex-wrap'>

        <img onClick={ logoutUser} src={Logo} alt="" className=' h-full w-48 cursor-pointer' />

<h1 className=' text-5xl  text-blue-500  font-semibold'>Student Perks </h1>
<div className=' '>

<input type="text"
placeholder='Search the Perks'
className=' bg-[#F3F4F6]   pr-10 pl-10 p-2     outline-none rounded-xl'

value={searchQuery}
// For the storing state variable basiclly storing input value so here it will use state variable

onChange={(e) => setSearchQuery(e.target.value)}
//  and update the state variable on any edits! so here it value use state function 

/>
</div>
    
</div>
        
    </div>
  )
}

export default Header