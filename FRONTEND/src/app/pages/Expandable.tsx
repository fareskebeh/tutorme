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
    <div  className="flex flex-col gap-2">
      <div onClick={()=> setOpen(!open)} className="flex text-2xl justify-between items-center p-2">
        <p className="font-bold w-[90%]">{props.question}</p>
        <HiChevronRight  className={` transition duration-200 ${
            open ? "rotate-90" : ""
        }`} />
      </div>
      <AnimatePresence>
        {   open && (
      <motion.div initial={{opacity:0, height:0}} exit={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} transition={{duration:0.2}}>
        <p className="text-xl px-4">{props.answer}</p>
      </motion.div>)
      }
      </AnimatePresence>

    </div>
  );
};

export default Expandable;
