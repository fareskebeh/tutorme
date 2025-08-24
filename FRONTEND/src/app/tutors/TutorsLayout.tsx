import { useState } from "react";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import MbSearch from "./MbSearch";
import { HiAdjustments, HiSearch } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = {
  vp: string;
};

const TutorsLayout = (props: Props) => {
  const[sOpen,setSOpen] = useState<boolean>(false)
  const {pathname} = useLocation()

  return (
    <div className="pt-20">
      {

      !pathname.includes("/tutors/id")  &&
      <>
      <AnimatePresence>
        {sOpen && (
            <MbSearch setSOpen={setSOpen}/>
        )}
      </AnimatePresence>
      
      {props.vp === "wide" ? (
        <div className="w-full fixed top-15 bg-white border border-neutral-100 z-[899] shadow-md p-4 flex justify-between items-center">
          <Search/>
          <HiAdjustments size={24}/>
        </div>
      ) : (
        <div className="shadow-md w-full flex p-4 justify-between items-center">
          <HiSearch className="active:bg-neutral-100 rounded-full" onClick={()=> setSOpen(true)} size={24} />
          <HiAdjustments size={24} />
        </div>
      )}
      </>
      }
      
      <Outlet/>
    </div>
  );
};

export default TutorsLayout;
