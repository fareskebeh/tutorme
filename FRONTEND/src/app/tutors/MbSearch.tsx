import React, { useState } from "react";
import { HiChevronLeft, HiX, HiSearch } from "react-icons/hi";
import { motion } from "framer-motion";

type Props = {
  setSOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Query = {
  subject: string;
  location:string;
}

const MbSearch = (props: Props) => {
  const [query, setQuery] = useState<Query>({
    subject:"",
    location:""
  });
  return (
    <motion.div
      onClick={()=>props.setSOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="bg-black/20 flex items-center justify-center fixed inset-0 z-[899]"
    >
      <motion.div
        onClick={(e)=> e.stopPropagation()}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.15 }}
        className="p-4 bg-white h-[60%] flex flex-col justify-between shadow-md rounded-2xl w-[90%]"
      >
        <div className="flex items-center gap-4">
          <HiChevronLeft onClick={() => props.setSOpen(false)} size={40} />
          <div className="flex flex-col gap-2 w-full">
            <div className="relative w-full">
              <input
                value={query.subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery({...query, subject:e.target.value})
                }
                className="bg-neutral-50 outline-none border border-neutral-200 w-full p-2 rounded-xl text-xl"
                placeholder="Enter Subject"
                type="text"
              />

              {query.subject && (
                <HiX
                  className="absolute right-3 text-neutral-400 top-2.5"
                  size={25}
                />
              )}
            </div>
            <div className="relative w-full">
              <input
                value={query.location}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery({...query, location:e.target.value})
                }
                className="bg-neutral-50 outline-none border border-neutral-200 w-full p-2 rounded-xl text-xl"
                placeholder="Enter Location"
                type="text"
              />

              {query.location && (
                <HiX
                  className="absolute right-3 text-neutral-400 top-2.5"
                  size={25}
                />
              )}
            </div>
          </div>
        </div>


        <div className="flex flex-col text-xl text-center *:select-none gap-4 justify-center items-center">
              <HiSearch size={50}/>
              <p className="w-[70%]">Enter keywords to start searching</p>
        </div>



        <button className="p-3 text-xl text-white font-bold bg-emerald-400 rounded-xl">Search</button>
      </motion.div>
    </motion.div>
  );
};

export default MbSearch;
