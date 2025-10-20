import { useEffect, useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineBookOpen,
  HiX,
} from "react-icons/hi";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

type Query = {
  subject: string | undefined;
  location: string | undefined;
};

const Search = () => {
  const [query, setQuery] = useState<Query>({
    subject: undefined,
    location: undefined,
  });

  const navigate = useNavigate();
  const search = () => {
    const searchQuery = new URLSearchParams();
    if (query.subject) {
      searchQuery.append("subject", query.subject.trim().toLowerCase());
    }
    if (query.location) {
      searchQuery.append("location", query.location.trim().toLowerCase());
    }
    navigate(`/tutors?${searchQuery.toString()}`);
  };

  const debQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debQuery) {
      //fetch logic postponed too
      console.log("fetching: ", query);
    }
  }, [debQuery]);

  return (
    <div className="flex gap-2">
      <div className="relative">
        <HiOutlineBookOpen
          className="text-neutral-400 absolute top-2.5 dark:text-slate-600 left-4"
          size={24}
        />

        <input
          onChange={(e) => setQuery({ ...query, subject: e.target.value })}
          value={query.subject}
          type="text"
          className="p-2 text-xl dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-600 dark:text-white transition duration-150 bg-neutral-100 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
          placeholder="Enter Subject"
        />
        {query.subject && (
          <HiX
            className="absolute text-neutral-300 top-2.5 dark:text-slate-600 right-4 cursor-pointer"
            onClick={() => setQuery({ ...query, subject: "" })}
            size={24}
          />
        )}
      </div>
      <div className="relative">
        <HiOutlineLocationMarker
          className="text-neutral-400 dark:text-slate-600 absolute top-2.5 left-4 "
          size={24}
        />

        <input
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
          value={query.location}
          type="text"
          className="p-2 text-xl dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-600 dark:text-white transition duration-150 bg-neutral-100 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
          placeholder="Enter Location"
        />
        {query.location && (
          <HiX
            className="absolute text-neutral-300 dark:text-slate-600 top-2.5 right-4 cursor-pointer"
            onClick={() => setQuery({ ...query, location: "" })}
            size={24}
          />
        )}
      </div>
      <button onClick={()=> search()} className="p-2 dark:bg-emerald-600 bg-emerald-500 transition duration-150 hover:opacity-90 active:opacity-80 rounded-xl px-2 text-xl font-bold text-white cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default Search;

// implement search predictions, search routing.
