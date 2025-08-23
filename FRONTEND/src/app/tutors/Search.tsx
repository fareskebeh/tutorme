import { useEffect, useState } from "react";
import { HiOutlineLocationMarker, HiOutlineBookOpen , HiX } from "react-icons/hi";
import useDebounce from "../../hooks/useDebounce";


type Query = {
  subject: string;
  location: string;
}

const Search = () => {
  const [query, setQuery] = useState<Query>({
    subject: "",
    location:""
  });
  const debQuery = useDebounce(query, 500)

  useEffect(()=> {
    if(debQuery) {
      //fetch logic postponed too
      console.log("fetching: ", query)
    }

  },[debQuery])

  return (
    <div className="flex gap-2">
      <div className="relative">
        <HiOutlineBookOpen
          className="text-neutral-300 absolute top-2.5 left-4"
          size={24}
        />

        <input
          onChange={(e) => setQuery({...query, subject:e.target.value})}
          value={query.subject}
          type="text"
          className="caret-emerald-400 bg-neutral-100 px-4 outline-none w-full p-2 rounded-xl text-xl pl-12"
          placeholder="Enter Subject"
        />
        {query.subject && (
          <HiX
            className="absolute text-neutral-300 top-2.5 right-4 cursor-pointer"
            onClick={() => setQuery({...query, subject:""})}
            size={24}
          />
        )}
      </div>
      <div className="relative">
        <HiOutlineLocationMarker
          className="text-neutral-300 absolute top-2.5 left-4"
          size={24}
        />

        <input
          onChange={(e) => setQuery({...query, location:e.target.value})}
          value={query.location}
          type="text"
          className="caret-emerald-400 bg-neutral-100 px-4 outline-none w-full p-2 rounded-xl text-xl pl-12"
          placeholder="Enter Location"
        />
        {query.location && (
          <HiX
            className="absolute text-neutral-300 top-2.5 right-4 cursor-pointer"
            onClick={() => setQuery({...query, location:""})}
            size={24}
          />
        )}
      </div>
      <button className="p-1 bg-emerald-400 transition duration-150 hover:opacity-90 active:opacity-80 rounded-xl px-2 text-xl font-bold text-white cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default Search;

// implement search predictions, search routing.