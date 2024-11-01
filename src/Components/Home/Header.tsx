import React,{useState} from 'react'
import Logo from "../../assets/img/Logo.png"
import { addData } from '../../Appwrite/config'

const Header = ({searchQuery , setSearchQuery }) => {
const [value, setValue] = useState(null)

//   function getInputData(val: string) {

// //  console.warn(val.target.value)
// //     // by this we get some console in which target named key has
// //     // targeted value as input so we will take that
// //     // and we target that value = that is input value

// //     setValue(val.target.value)
//   }

  return (
    <div className='   bg-white'>
            <button className='text-xl ' onClick={addData}>Add data</button>

  <div className=' bg-white flex  mr-16 ml-16   justify-between   items-center  flex-wrap'>

        <img src={Logo} alt="" className=' h-full w-48' />

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