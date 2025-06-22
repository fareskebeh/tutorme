import {useState} from "react"
import { HiMenu } from "react-icons/hi";
import {Link} from "react-router-dom"

type Props = {}

const MbMenu = (props: Props) => {
    const[open,setOpen] = useState<boolean>(false)
    
  return (
    <div className="flex">
        <button onClick={()=>setOpen(!open)}>
            <HiMenu size={25}/>
        </button>

        <div className={`${open ? "" : "translate-x-full"} p-4 transition duration-200 fixed top-0 bg-white right-0 bottom-0`}>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default MbMenu