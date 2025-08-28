import React, { useState, useContext } from "react";
import { HiChevronRight, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import MbDropdown from "./MbDropdown";
import { authContext } from "../../../state/authState";
import blankPfp from "../../../assets/blank-profile-picture-hd-images-photo-1.jpeg"

const MbMenu = () => {
  const auth = useContext(authContext)
  if(!auth) {
    throw new Error("authContext is undefined")
  }
  const {user} = auth;
  const [bar, setBar] = useState<boolean>(false);
  const dropContent: string[] = ["All", "Online", "Home"];
  const dropdowns: string[] = ["tutors"];

  return (
    <div className="flex">
      <button onClick={() => setBar(!bar)}>
        <HiMenu size={25} />
      </button>

      {/*Overlay*/}
      {bar && (
        <motion.div
          onClick={() => setBar(false)}
          className="bg-black/50 fixed z-40 top-0 bottom-0 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <div
        className={`${
          bar ? "" : "translate-x-full"
        } w-[60%] p-4 shadow-lg flex flex-col justify-between transition duration-200 z-90 fixed top-0 bg-white right-0 bottom-0`}
      >
        {/*Header*/}
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Tutorme</p>
          <button onClick={() => setBar(false)}>
            <HiArrowRight size={30} />
          </button>
        </div>

        {/*Links*/}
        <div className="">
          {
          dropdowns.map((drop, index) => (

            <React.Fragment key={index}>
              <MbDropdown
                setBar={setBar}
                key={index}
                label={drop}
                dropContent={dropContent}
              />
            </React.Fragment>

          ))}
          
          <div className="*:p-2 text-lg *:transition duration-300 flex flex-col *:rounded-md">
            <Link onClick={()=> setBar(false)} className={`${location.pathname==="/about" && "bg-emerald-500 text-white"}`} to="/about">About</Link>
            <Link onClick={()=> setBar(false)} className={`${location.pathname==="/faq" && "bg-emerald-500 text-white"}`} to="/faq">FAQ</Link>
          </div>

        </div>

        {/*Theme + Auth (currently postponed functionality)s*/}
        <div>
          <div className="flex py-4 gap-2">
            <div className="flex gap-2 items-center">
            <HiOutlineMoon size={25} />
            <p>Dark Theme</p>
            </div>
            <div className="relative ml-10">
              <input
                className="hidden peer"
                type="checkbox"
                id="theme"
              />
              <label className="peer-checked:bg-emerald-500 before:transition before:duration-300 peer-checked:before:translate-x-4 transition duration-300 absolute top-0 bottom-0 left-0 right-0 w-10 before:content-[''] before:absolute before:h-4 before:bg-white before:w-4 pl-1 before:top-1/2 before:-translate-y-1/2 before:rounded-full bg-neutral-400 rounded-xl" htmlFor="theme"/>
            </div>
          </div>

          <hr className="border-neutral-500/40"/>

          {
            user? 
            (
              <Link to="/dashboard" className="flex items-center py-4 justify-between">
                <div className="flex items-center gap-3">
                  {/* Placeholder */}
                  <img className="w-10 h-10 object-cover rounded-full" src={blankPfp} alt="" />
                  <p className="font-bold">{user.username}</p>
                </div>
                <HiChevronRight/>
              </Link>
            ):(
              <div className="pt-6 pb-2">
                <Link to="/login" className="p-2 rounded-lg text-white bg-emerald-500">Log In</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MbMenu;
