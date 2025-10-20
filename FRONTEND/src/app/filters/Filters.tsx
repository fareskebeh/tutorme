import { useEffect, useState } from "react";
import {
  HiAdjustments,
  HiOutlineBookOpen,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";

type Filter = {
  subject?: string | undefined;
  location?: string | undefined;
  availability?: "available" | "highlyAvailable" | "all" | undefined;
  availabilityLocation?: "home" | "online" | "assignment" | "all" | undefined;
  maxRate?: number | undefined;
};

const Filters = () => {
  const navigate = useNavigate();
  const [bar, setBar] = useState<boolean>(false);
  const [searchParams] = useSearchParams()

  const initParams: Filter = {
    subject: searchParams.get("subject") ?? undefined,
    location: searchParams.get("location") ?? undefined,
    availability: searchParams.get("availability") as Filter["availability"] ?? undefined,
    availabilityLocation: searchParams.get("availabilityLocation") as Filter["availabilityLocation"] ?? undefined,
    maxRate: searchParams.get("maxRate") !== null 
  ? Number(searchParams.get("maxRate")) 
  : undefined,
  }

  const [filters, setFilters] = useState<Filter>({
    subject: initParams.subject,
    location: initParams.location,
    availability: initParams.availability,
    availabilityLocation: initParams.availabilityLocation,
    maxRate: initParams.maxRate
  });

  const filterTutors = () => {
    const filterParams = new URLSearchParams();
    if(filters.subject) {
      filterParams.append("subject", filters.subject.trim().toLowerCase())
    }
    if(filters.location) {
      filterParams.append("location", filters.location.trim().toLowerCase())
    }
    if(filters.availability) {
      filterParams.append("availability", filters.availability)
    }
    if(filters.availabilityLocation) {
      filterParams.append("availabilityLocation", filters.availabilityLocation)
    }
    if(filters.maxRate !== undefined) {
      filterParams.append("maxRate", String(filters.maxRate))
    }
    setBar(false)
    navigate(`/tutors?${filterParams.toString()}`)
      };

  useEffect(() => {
    if (bar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [bar]);

  return (
    <div className="flex">
      <button
        className="cursor-pointer p-1  dark:text-slate-600 dark:hover:bg-slate-800 rounded-full hover:bg-neutral-100 transition duration-150"
        onClick={() => setBar(!bar)}
      >
        <HiAdjustments size={25} />
      </button>

      {/*Overlay*/}
      {bar && (
        <motion.div
          onClick={() => setBar(false)}
          className="bg-black/50 fixed z-[999] top-0 bottom-0 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <div
        className={`${
          bar ? "" : "translate-x-full"
        } w-[70%] sm:w-[50%] p-4 shadow-lg h-[100dvh] flex justify-between dark:bg-slate-950 dark:text-white flex-col transition duration-150 z-[999] gap-8 fixed top-0 bg-white right-0 bottom-0`}
      >
        {/*Header*/}
        <div className="flex justify-between">
          <div className="text-xl">Filter by</div>
          <button className="cursor-pointer hover:bg-neutral-100 dark:hover:bg-slate-900 p-2 rounded-full transition dark:text-slate-600 duration-150" onClick={() => setBar(false)}>
            <HiArrowRight size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-12 scrollbar scrollbar-thumb-neutral-200 scrollbar-track-white dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-900 pr-4 h-[90%] overflow-y-auto">
          <div className="text-xl space-y-4">
            <p className="font-bold">Subject</p>
            <div className="relative">
              <HiOutlineBookOpen className="absolute dark:text-slate-600 text-neutral-500 top-3.5 left-4" />
              <input
                value={filters?.subject}
                onChange={(e) =>
                  setFilters({ ...filters, subject: e.target.value })
                }
                className="p-2 dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-600 dark:text-white text-xl bg-neutral-300/50 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
                placeholder="e.g: Math, Physics.."
                type="text"
              />
            </div>
          </div>

          <div className="text-xl space-y-4">
            <p className="font-bold">Location</p>
            <div className="relative">
              <HiOutlineLocationMarker className="absolute dark:text-slate-600 text-neutral-500 top-3.5 left-4" />
              <input
                value={filters?.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                className="p-2 text-xl dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-600 dark:text-white bg-neutral-300/50 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
                placeholder="e.g: New York, Rome.."
                type="text"
              />
            </div>
          </div>

          <div className="text-xl space-y-4 dark:**:[&>span]:text-slate-400">
            <p className="font-bold">Availability</p>
            <div className="*:space-x-2 space-y-2">
              <div>
                <input
                  checked={filters?.availability === "all" ? true : false}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availability: "all",
                    })
                  }
                  type="radio"
                  name="avail"
                  className="accent-emerald-500"
                />
                <span>All</span>
              </div>

              <div>
                <input
                  checked={
                    filters?.availability === "highlyAvailable" ? true : false
                  }
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availability: "highlyAvailable",
                    })
                  }
                  type="radio"
                  name="avail"
                  className="accent-emerald-500"
                />
                <span>Highly Available</span>
              </div>

              <div>
                <input
                  checked={filters?.availability === "available" ? true : false}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availability: "available",
                    })
                  }
                  type="radio"
                  name="avail"
                  className="accent-emerald-500"
                />
                <span>Available</span>
              </div>
            </div>
          </div>

          <div className="text-xl space-y-4 dark:**:[&>span]:text-slate-400">
            <p className="font-bold">Availability Location</p>
            <div className="*:space-x-2 space-y-2">
              <div>
                <input
                  checked={
                    filters?.availabilityLocation === "all" ? true : false
                  }
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availabilityLocation: "all",
                    })
                  }
                  type="radio"
                  className="accent-emerald-500"
                  name="avLoc"
                />
                <span>All</span>
              </div>

              <div>
                <input
                  checked={
                    filters?.availabilityLocation === "online" ? true : false
                  }
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availabilityLocation: "online",
                    })
                  }
                  type="radio"
                  className="accent-emerald-500"
                  name="avLoc"
                />
                <span>Online</span>
              </div>
              <div>
                <input
                  type="radio"
                  checked={
                    filters?.availabilityLocation === "home" ? true : false
                  }
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availabilityLocation: "home",
                    })
                  }
                  className="accent-emerald-500"
                  name="avLoc"
                />
                <span>Home</span>
              </div>

              <div>
                <input
                  type="radio"
                  checked={
                    filters?.availabilityLocation === "assignment"
                      ? true
                      : false
                  }
                  onChange={() =>
                    setFilters({
                      ...filters,
                      availabilityLocation: "assignment",
                    })
                  }
                  className="accent-emerald-500"
                  name="avLoc"
                />
                <span>Assignment</span>
              </div>
            </div>
          </div>

          <div className="text-xl space-y-4 w-full">
            <p className="font-bold">Max Rate</p>
            <div className="flex gap-2 text-lg">
              <input
                value={filters?.maxRate}
                onChange={(e) =>
                  setFilters({ ...filters, maxRate: Number(e.target.value) })
                }
                type="range"
                min="0.99"
                step="1"
                className="w-[50%] range accent-emerald-500 cursor-pointer"
                max="99.99"
              />
              <span className="p-2 text-xl dark:bg-slate-900 dark:border-slate-800 bg-neutral-300/50 border rounded-xl border-b-2 border-neutral-300">
                ${filters?.maxRate} /hr
              </span>
            </div>
          </div>
        </div>

        <div className="p-2 *:cursor-pointer *:p-2 *:text-xl *:hover:opacity-90 *:active:opacity-80 *:transition *:duration-150 *:shadow-md *:font-bold flex *:flex-1 gap-4 *:rounded-xl">
          <button onClick={filterTutors} className="text-white bg-emerald-500 dark:bg-emerald-600">
            Apply
          </button>
          <button
            onClick={() => setBar(false)}
            className="text-neutral-500 bg-neutral-200 dark:bg-slate-800 dark:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
