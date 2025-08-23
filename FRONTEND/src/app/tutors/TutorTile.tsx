import type { Tutor } from "../mock/types";
import blankPfp from "../../assets/icons/pfp.png";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiStar,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi";
import {motion} from "framer-motion"

const TutorTile = (props: Tutor) => {
  return (
    <motion.div initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}} className="flex cursor-pointer p-4 justify-between bg-white shadow-md rounded-xl">
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

        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="flex items-center">
            {Array(5).fill(
              <HiStar className="text-amber-300 size-6 sm:size-7 md:size-8" />,
              0,
              Math.floor(props.rating)
            )}
            {Array(5 - Math.floor(props.rating)).fill(
              <HiStar className="text-amber-100 size-6 sm:size-7 md:size-8" />
            )}
          </div>
          <div className="flex text-neutral-500 items-center gap-1">
            <HiOutlineClock /> {props.availability}
          </div>
        </div>
      </div>
      <div className="flex-col flex items-end justify-between">
        <button className="cursor-pointer hover:scale-105 transition duration-150 active:scale-100">{props.isFavorite ? <HiHeart className="size-6 sm:size-7 md:size-8 text-emerald-400"/> : <HiOutlineHeart className=" text-neutral-300 size-6 sm:size-7 md:size-8"/>}</button>
        <button className="cursor-pointer p-2 text-lg rounded-xl bg-emerald-400 text-white text-nowrap">Preview</button>
      </div>
    </motion.div>
  );
};

export default TutorTile;
