import { HiSearch } from "react-icons/hi";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineBookOpen } from "react-icons/hi";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Query = {
  subject: string | undefined;
  location: string | undefined;
};

const HomeSearch = () => {

  const navigate = useNavigate()
    const [query, setQuery] = useState<Query>({
      subject: undefined,
      location: undefined,
    });
    const debQuery = useDebounce(query, 500);
  
    const search = ()=> {
      const searchQuery = new URLSearchParams()
      if(query.subject) {
        searchQuery.append("subject", query.subject.trim().toLowerCase())
      }
      if(query.location) {
        searchQuery.append("location", query.location.trim().toLowerCase())
      }
      navigate(`/tutors?${searchQuery.toString()}`)
    }

     useEffect(() => {
        if (debQuery) {
          //fetch logic postponed too
          console.log("fetching: ", query);
        }
      }, [debQuery]);
  

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: "97%" }}
      whileInView={{ opacity: 1, y: 0, scale: "100%" }}
      transition={{ duration: 0.5 }}
      className="p-6 dark:from-slate-900 dark:to-slate-800 transition duration-150 space-y-6 my-4 sm:flex-[0.75] rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 shadow-lg"
    >
      <div className="text-2xl space-y-4">
        <p className="font-bold">Enter the subject:</p>
        <div className="relative">
        <HiOutlineBookOpen className="absolute dark:text-slate-500 text-neutral-500 top-4 left-4"/>
        <input
          value={query.subject}
          onChange={(e)=> setQuery({...query, subject: e.target.value})}
          className="p-3 text-2xl bg-neutral-300/50 transition duration-150 dark:bg-slate-700/50 dark:border-slate-800 dark:placeholder:text-slate-500 placeholder:text-neutral-500 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
          placeholder="e.g: Math, Physics.."
          type="text"
        />
        </div>
      </div>

      <div className="text-2xl space-y-4">
        <p className="font-bold">Enter the location:</p>
        <div className="relative">
        <HiOutlineLocationMarker className="absolute dark:text-slate-500 text-neutral-500 top-4 left-4"/>
        <input
          value={query.location}
          onChange={(e)=> setQuery({...query, location: e.target.value})}
          className="p-3 text-2xl bg-neutral-300/50 transition duration-150 dark:bg-slate-700/50 dark:border-slate-800 dark:placeholder:text-slate-500 placeholder:text-neutral-500 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
          placeholder="e.g: New York, Moscow..."
          type="text"
        />
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={()=>search()} className="dark:bg-emerald-600 transition duration-150 cursor-pointer hover:scale-102 bg-emerald-500 text-white flex items-center gap-2 active:scale-98 font-bold text-2xl p-3 rounded-xl">
          <HiSearch /> Search
        </button>
      </div>
    </motion.div>
  );
};

export default HomeSearch;
