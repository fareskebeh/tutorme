import { useState } from "react";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import MbSearch from "./MbSearch";
import { HiSearch } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Filters from "../filters/Filters";

type Props = {
  vp: string;
};

const TutorsLayout = (props: Props) => {
  const[sOpen,setSOpen] = useState<boolean>(false)
  const {pathname} = useLocation()
  return (
    <div className="pt-16">
      {

      !pathname.includes("/tutors/id")  &&
      <>
      <AnimatePresence>
        {sOpen && (
            <MbSearch setSOpen={setSOpen}/>
        )}
      </AnimatePresence>
      
      {props.vp === "wide" ? (
        <div className="w-full  dark:bg-slate-950 transition duration-150 bg-white border-b dark:border-slate-900 border-neutral-100 z-[899] shadow-md p-4 flex justify-between items-center">
          <Search/>
          <Filters/>
        </div>
      ) : (
        <div className="shadow-md  dark:bg-slate-950 transition duration-150 w-full flex p-4 justify-between items-center">
          <HiSearch className="active:bg-neutral-100 dark:text-white rounded-full" onClick={()=> setSOpen(true)} size={24} />
          <Filters/>
        </div>
      )}
      </>
      }
      
      <Outlet/>
    </div>
  );
};

export default TutorsLayout;
