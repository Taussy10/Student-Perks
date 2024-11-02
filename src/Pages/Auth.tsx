import React,{useState , useEffect} from 'react'
import { loginUser  , getUser } from '../Appwrite/config'


const Auth = () => {
const [user, setUser] = useState(null)

useEffect(() => {
  const checkUser = async () => {
    try {
      const userData = await getUser()
      setUser(userData)
    } catch (error) {
      setUser(null)
    }
  }

  checkUser()
}, [])

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <button onClick={loginUser}>Login with Google</button>
      )}
    </div>
  )
}

export default Auth