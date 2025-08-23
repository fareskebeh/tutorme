import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Tutor } from "../mock/types";
import tutors from "../mock/tutors";
import blankPfp from "../../assets/icons/pfp.png";
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiStar,
  HiOutlineChat
} from "react-icons/hi";
import Reviews from "./Reviews";

const TutorPreview = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState<Tutor | undefined>(undefined);

  useEffect(() => {
    const currTutor: Tutor | undefined = tutors.find(
      (tutor) => tutor.id === id
    );
    if (id) {
      setTutor(currTutor);
    }
  });
  return (
    <div className="sm:pt-18 p-4 px-8 flex sm:flex-row flex-col gap-8">
      <div className="flex flex-[0.6] flex-col items-start gap-4 sm:gap-6 md:gap-8">
        <div className=" flex items-center gap-4 ">
          <img
            className="h-30 w-30 sm:h-50 sm:w-50 shadow-md  rounded-full"
            src={tutor?.pfp ? tutor?.pfp : blankPfp}
            draggable="false"
          />

          <div className="*:flex *:items-center flex flex-col gap-2">
            <div className="text-5xl font-bold sm:text-6xl md:text-7xl">
              <p>
                {tutor?.firstName} {tutor?.lastName}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tutor?.tags?.map((t, i) => (
                <p
                  className="p-2 rounded-xl bg-neutral-100 text-neutral-500"
                  key={i}
                >
                  {t}
                </p>
              ))}
            </div>
            <div className="text-neutral-500 gap-2 sm:text-xl md:text-2xl">
              <HiOutlineLocationMarker />
              {tutor?.location}
            </div>
            <div className="text-neutral-500 gap-2 sm:text-xl md:text-2xl">
              <HiOutlineCurrencyDollar /> ${tutor?.rate}/hr
            </div>
          </div>
        </div>
        {tutor?.rating && (
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-center">
              {Array(Math.floor(tutor?.rating ?? 0))
                .fill(null)
                .map((_, i) => (
                  <HiStar
                    key={`filled-${i}`}
                    className="text-amber-300 size-6 sm:size-7 md:size-8"
                  />
                ))}

              {Array(5 - Math.floor(tutor?.rating ?? 0))
                .fill(null)
                .map((_, i) => (
                  <HiStar
                    key={`empty-${i}`}
                    className="text-amber-100 size-6 sm:size-7 md:size-8"
                  />
                ))}

              <p className="ml-2 text-neutral-500">
                {tutor?.rating} ({tutor?.reviewsCount})
              </p>
            </div>
            <div className="flex flex-col sm:gap-8 sm:flex-row sm:items-center text-neutral-500 items-start gap-1">
              <div className="flex items-center gap-1">
                <HiOutlineClock /> {tutor?.availability}
              </div>
              <div className="flex gap-2 *:p-2 *:rounded-xl *:bg-emerald-50 text-emerald-500">
                {tutor?.locationAvailability.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="flex *:flex *:items-center *:gap-2 gap-2 *:rounded-xl *:p-2 *:px-3 *:text-xl">
          <button className="bg-emerald-500 cursor-pointer shadow-md hover:opacity-90 active:opacity-80 transition duration-150 text-white">
            <HiOutlineClock /> Book
          </button>
          <button className="bg-neutral-100 shadow-md text-neutral-500 cursor-pointer hover:opacity-90 active:opacity-80 transition duration-150">
            <HiOutlineChat /> Chat
          </button>

          {tutor?.isFavorite ? (
            <button className="bg-emerald-100 shadow-md cursor-pointer hover:opacity-90 active:opacity-80 transition duration-150 text-emerald-500">
              <HiOutlineHeart /> Unfavorite
            </button>
          ) : (
            <button className="border shadow-md text-emerald-500 border-emerald-500 cursor-pointer hover:opacity-90 active:opacity-80 transition duration-150">
              <HiOutlineHeart /> Favorite
            </button>
          )}
        </div>
      </div>

      <div className="flex-[0.4]">
        <Reviews reviews={tutor?.reviews} reviewCount={tutor?.reviewsCount} />
      </div>
    </div>
  );
};

export default TutorPreview;
