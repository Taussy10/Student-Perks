import Lottie from "lottie-react"
import loading from '../assets/animation/loading.json'

const Loading = () => {
  return (
    <div  className="  min-h-screen flex  flex-row justify-center items-start">
        <Lottie animationData={loading} loop={true} 
        style={{ height: '40%', width: '40%' }}

        />
    </div>
  )
}

export default Loading