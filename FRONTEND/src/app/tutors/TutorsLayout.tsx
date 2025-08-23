import { useState } from "react";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import MbSearch from "./MbSearch";
import { HiAdjustments, HiSearch } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";

type Props = {
  vp: string;
};

const TutorsLayout = (props: Props) => {
  const[sOpen,setSOpen] = useState<boolean>(false)

  return (
    <div className="pt-20">
      <AnimatePresence>
        {sOpen && (
            <MbSearch setSOpen={setSOpen}/>
        )}
      </AnimatePresence>
      {props.vp === "wide" ? (
        <div className="w-full fixed top-15 bg-white z-[999] shadow-md p-4 flex justify-between items-center">
          <Search/>
          <HiAdjustments size={24}/>
        </div>
      ) : (
        <div className="shadow-md w-full flex p-4 justify-between items-center">
          <HiSearch onClick={()=> setSOpen(true)} size={24} />
          <HiAdjustments size={24} />
        </div>
      )}
      <Outlet/>
    </div>
  );
};

export default TutorsLayout;
