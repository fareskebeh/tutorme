import React, { useEffect, useState } from "react";
import { HiX, HiSearch, HiOutlineLocationMarker, HiOutlineBookOpen } from "react-icons/hi";
import { motion } from "framer-motion";
import useDebounce from "../../hooks/useDebounce";

type Props = {
  setSOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Query = {
  subject: string;
  location: string;
};

const MbSearch = (props: Props) => {
  const [query, setQuery] = useState<Query>({
    subject: "",
    location: "",
  });
  const debQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debQuery) {
      //fetch logic for search (postponed)
      console.log("fetching: ", query);
    }
  }, [debQuery]);

  return (
    <motion.div
      onClick={() => props.setSOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="bg-black/20 flex items-center justify-center fixed inset-0 z-[899]"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.15 }}
        className="p-4 bg-white h-[60%] flex flex-col justify-between shadow-md rounded-2xl w-[90%]"
      >
        <div className="pb-4 pr-2">
          <HiX
            onClick={() => props.setSOpen(false)}
            size={24}
            className="float-right active:bg-neutral-100 rounded-full"
          />
        </div>

        <div className="flex *:caret-emerald-400 flex-col gap-2 w-full">
          <div className="relative w-full">
            <HiOutlineBookOpen className="absolute text-neutral-500 top-3.5 left-2.5" />
            <input
              value={query.subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery({ ...query, subject: e.target.value })
              }
              className="p-2 text-xl pl-8 bg-neutral-200/50 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 border-neutral-300"
              placeholder="Enter Subject"
              type="text"
            />

            {query.subject && (
              <HiX
                onClick={() => setQuery({ ...query, subject: "" })}
                className="absolute right-3 text-neutral-400 top-2.5"
                size={25}
              />
            )}
          </div>
          <div className="relative w-full">
            <HiOutlineLocationMarker className="absolute text-neutral-500 top-3.5 left-2.5" />

            <input
              value={query.location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery({ ...query, location: e.target.value })
              }
              className="p-2 pl-8 text-xl bg-neutral-200/50 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 border-neutral-300"
              placeholder="Enter Location"
              type="text"
            />

            {query.location && (
              <HiX
                onClick={() => setQuery({ ...query, location: "" })}
                className="absolute right-3 text-neutral-400 top-2.5"
                size={25}
              />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col text-xl text-center *:select-none gap-4 justify-center items-center">
          <HiSearch size={50} />
          <p className="w-[70%]">Enter keywords to start searching</p>
        </div>

        <button className="p-3 text-xl text-white font-bold bg-emerald-500 active:opacity-80 transition duration-150 rounded-xl">
          Search
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MbSearch;
