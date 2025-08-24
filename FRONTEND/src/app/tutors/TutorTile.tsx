import type { Tutor } from "../mock/types";
import blankPfp from "../../assets/icons/pfp.png";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";
import { useContext, useState } from "react";
import Modal from "../../components/Modal";
import { authContext } from "../../state/authState";

const TutorTile = (props: Tutor) => {
  const auth = useContext(authContext);
    if (!auth) {
      throw new Error("authContext is undefined");
    }
    const { user } = auth;
  
  const[modal,setModal]=useState<boolean>(false)
  const favorite=()=> {
    if(user) {
      //logic to favorite, in another branch
    }
    else {
      setModal(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex p-4 justify-between bg-white shadow-md border border-neutral-100 rounded-xl"
    >
      <AnimatePresence>
        {
          modal && <Modal setModal={setModal} prompt="You need to be logged in to perform this action" confirm="Log In" abort="Cancel"/>
        }
      </AnimatePresence>
      <div className="  justify-between flex flex-col gap-4 sm:gap-6 md:gap-8 ">
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <img
            className="h-15 w-15 sm:h-30 shadow-md sm:w-30 rounded-full"
            src={props.pfp ? props.pfp : blankPfp}
            draggable="false"
          />
          <div className="flex *:flex *:items-center *:gap-1 flex-col justify-center gap-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {props.firstName} {props.lastName}
            </div>
            <div className="text-neutral-500 sm:text-lg md:text-xl">
              <HiOutlineLocationMarker />
              {props.location}
            </div>
            <div className="text-neutral-500 sm:text-lg md:text-xl">
              <HiOutlineCurrencyDollar /> {props.rate}/hr
            </div>
          </div>
        </div>

        {props.tags && (
          <div className="flex flex-wrap *:p-2 *:text-neutral-600 *:bg-neutral-100 gap-2 *:rounded-xl">
            {props.tags?.map((tag, i) => (
              <div key={i}>{tag}</div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-1 sm:gap-2">
          <Rating rating={props.rating}/>
          <div className="flex flex-col sm:gap-8 sm:flex-row sm:items-center text-neutral-500 items-start gap-1">
            <div className="flex items-center gap-1">
            <HiOutlineClock /> {props.availability}
            </div>
            <div className="flex gap-2 *:p-2 *:rounded-xl *:bg-emerald-50 text-emerald-500">
              {props.locationAvailability.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex items-end justify-between">
        <button className="cursor-pointer hover:scale-105 transition duration-150 active:scale-100">
          {props.isFavorite ? (
            <HiHeart onClick={favorite} className="size-6 sm:size-7 md:size-8 text-emerald-500" />
          ) : (
            <HiOutlineHeart onClick={favorite} className=" text-neutral-300 size-6 sm:size-7 md:size-8" />
          )}
        </button>
        <Link to={`/tutors/id/${props.id}`} className="cursor-pointer font-bold text-xl p-2 rounded-xl active:opacity-80 hover:opacity-90 transition duration-150 bg-emerald-500 text-white text-nowrap">
          Preview
        </Link>
      </div>
    </motion.div>
  );
};

export default TutorTile;
