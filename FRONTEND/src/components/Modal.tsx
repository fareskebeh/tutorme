import type { SetStateAction } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  setModal: React.Dispatch<SetStateAction<boolean>>;
  confirm: string;
  abort: string;
  prompt:string;
};

const Modal = (props: Props) => {
  return (
    <motion.div
      onClick={() => props.setModal(false)}
      className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:0.2}}
    >
      <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} onClick={(e)=> e.stopPropagation()} className="bg-white w-[80%] dark:bg-slate-900 dark:text-white sm:w-[20%] flex flex-col gap-8 sm:gap-12 p-4 rounded-xl shadow-md">
        <div className="text-xl text-center">{props.prompt}</div>
        <div className="flex *:flex-1 *:p-2 gap-2 *:cursor-pointer *:hover:opacity-90 *:active:opacity-80 *:transition *:duration-150 *:rounded-lg *:text-xl *:font-bold">
          <Link to="/login" className="bg-emerald-500 text-center dark:bg-emerald-600 text-white">{props.confirm}</Link>
          <button onClick={()=>props.setModal(false)} className="bg-neutral-200 dark:bg-slate-800 dark:text-slate-400 text-neutral-600">{props.abort}</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
