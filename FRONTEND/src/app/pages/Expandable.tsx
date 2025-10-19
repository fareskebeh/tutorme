import {useState} from "react";
import { HiChevronRight } from "react-icons/hi2";
import {AnimatePresence, motion} from "framer-motion"

type Props = {
    question:string,
    answer:string,
};

const Expandable = (props: Props) => {
  const[open,setOpen]= useState(false)
  return (
    <div className="flex flex-col gap-2 ">
      <div onClick={()=> setOpen(!open)} className={`${open ? "bg-emerald-500 dark:bg-emerald-600 text-white" : ""} dark:text-white transition duration-150 flex rounded-lg text-2xl justify-between items-center p-4`}>
        <p className="font-bold w-[90%]">{props.question}</p>
        <HiChevronRight  className={` transition duration-200 ${
            open ? "rotate-90" : ""
        }`} />
      </div>
      <AnimatePresence>
        {   open && (
      <motion.div initial={{opacity:0, height:0}} exit={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} transition={{duration:0.2}}>
        <p className="text-xl p-4 dark:text-slate-300">{props.answer}</p>
      </motion.div>)
      }
      </AnimatePresence>

    </div>
  );
};

export default Expandable;
