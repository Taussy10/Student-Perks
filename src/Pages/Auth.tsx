import React,{useState , useEffect} from 'react'
// import {loginWithGoogle ,  logoutUser  , getUser  } from "./Suth.js"
import { addData , listData , updateData } from '../Appwrite/config.js'




const Auth = () => {

  async function fetchData() {
    try {
      const data = await listData(); // Await the result from listData
      console.log("Fetched data:", data); // Log the fetched data
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

 // useEffect to call fetchData when the component mounts
 useEffect(() => {
  fetchData(); // Fetch data on component mount
}, []); // Empty dependency array ensures it runs only once



  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const checkUser = async () => {
  //     try {
  //       const userData = await getUser()
  //       setUser(userData)
  //     } catch (error) {
  //       setUser(null)
  //     }
  //   }

  //   checkUser()
  // }, [])

  return (

    <div>
    {/* {user ? (
      <>
        <p>Welcome, {user.name}!</p>
        <button onClick={logoutUser}>Logout</button>
      </>
    ) : (
      <button onClick={loginWithGoogle}>Login with Google</button>
    )} */}
    <div className=' flex  flex-col'>
      <button className='text-xl ' onClick={addData}>Add data</button>
      <button className='text-xl' onClick={listData}>List data</button>
      <button className='text-xl' onClick={updateData}>Update data</button>
      </div>
    </div>
  )
}

export default Auth