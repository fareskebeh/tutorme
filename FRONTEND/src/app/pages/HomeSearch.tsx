import { HiSearch } from "react-icons/hi"
import {motion} from "framer-motion"

const HomeSearch = () => {
  return (
    <motion.form initial={{opacity:0, y:-20, scale: "97%"}} whileInView={{opacity:1, y:0, scale: "100%"}} transition={{duration:0.5}} className="p-6 space-y-6 my-4 sm:flex-[0.75] rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 shadow-lg">
        <div className="text-2xl space-y-4 text-gray-300">
            <p className="font-bold">Enter the subject:</p>
            <input className="outline-none bg-navy-700/30 focus:shadow-blue border-2 border-transparent focus:border-blue-600 transition duration-200 placeholder:text-gray-400/30 rounded-xl w-full p-3" placeholder="e.g: Math, Physics.." type="text" />
        </div>

        <div className="text-2xl space-y-4 text-gray-300">
            <p className="font-bold">Enter your location:</p>
            <input className="outline-none bg-navy-700/30 focus:shadow-blue border-2 border-transparent focus:border-blue-600 transition duration-200 placeholder:text-gray-400/30 rounded-xl w-full p-3" placeholder="e.g: New York, Melbourne.." type="text" />
        </div>

        <div className="flex justify-center">
            <button className="cursor-pointer hover:scale-102 transition duration-200 bg-blue-600 text-white flex items-center gap-2 active:scale-98 font-bold text-2xl p-3 rounded-xl">
               <HiSearch/> Search 
            </button>
        </div>
    </motion.form>
  )
}

export default HomeSearch