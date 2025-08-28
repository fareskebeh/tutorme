import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Tutor } from "../mock/types";
import tutors from "../mock/tutors";
import blankPfp from "../../assets/icons/pfp.png";
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiOutlineChat,
} from "react-icons/hi";
import Reviews from "./Reviews";
import Rating from "../../components/Rating";
import Modal from "../../components/Modal";
import { AnimatePresence } from "framer-motion";
import { authContext } from "../../state/authState";
import TutorPrevLoader from "../fallback/loading/TutorPrevLoader";

type Preview = {
  tutor: Tutor | undefined;
  state: "LOADING" | "ERROR" | "SUCCESS";
};

const TutorPreview = () => {
  const navigate = useNavigate();

  const auth = useContext(authContext);
  if (!auth) {
    throw new Error("authContext is undefined");
  }
  const { user } = auth;
  const { id } = useParams();
  const [preview, setPreview] = useState<Preview | undefined>(undefined);

  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const previewTutor = () => {
      setPreview({
        tutor: undefined,
        state: "LOADING",
      });
      setTimeout(() => {
        const currTutor: Tutor | undefined = tutors.find(
          (tutor) => tutor.id === id
        );
        if (id) {
          setPreview({
            tutor: currTutor,
            state: "SUCCESS",
          });
        }
      }, 5000);
    };

    previewTutor();
  }, []);

  const performAction = (action: "book" | "chat" | "favorite") => {
    if (user) {
      if (action === "book") {
        navigate(`/tutors/book/${id}`);
      }
      if (action === "chat") {
        navigate(`/tutors/chat/${id}`);
      }
      if (action === "favorite") {
        // logic to favorite/unfavorite, next feature probs
      }
    } else {
      setModal(true);
    }
  };

  return (
    <div className="sm:pt-18 p-4 px-8 flex sm:flex-row flex-col gap-8">
      {preview?.state === "LOADING" ? (
        <TutorPrevLoader />
      ) : (
        <>
          <AnimatePresence>
            {modal && (
              <Modal
                setModal={setModal}
                confirm="Log In"
                abort="Cancel"
                prompt="To use this feature, you must be logged in"
              />
            )}
          </AnimatePresence>
          <div className="flex flex-[0.6] flex-col items-start gap-4 sm:gap-6 md:gap-8">
            <div className=" flex items-center gap-4 ">
              <img
                className="h-30 w-30 sm:h-50 sm:w-50 shadow-md  rounded-full"
                src={preview?.tutor?.pfp ? preview?.tutor?.pfp : blankPfp}
                draggable="false"
              />

              <div className="*:flex *:items-center flex flex-col gap-2">
                <div className="text-5xl font-bold sm:text-6xl md:text-7xl">
                  <p>
                    {preview?.tutor?.firstName} {preview?.tutor?.lastName}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {preview?.tutor?.tags?.map((t, i) => (
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
                  {preview?.tutor?.location}
                </div>
                <div className="text-neutral-500 gap-2 sm:text-xl md:text-2xl">
                  <HiOutlineCurrencyDollar /> ${preview?.tutor?.rate}/hr
                </div>
              </div>
            </div>
            {preview?.tutor?.rating && (
              <div className="flex flex-col gap-1 sm:gap-2">
                <Rating
                  rating={preview?.tutor?.rating}
                  reviewsCount={preview?.tutor?.reviewsCount}
                />
                <div className="flex flex-col sm:gap-8 sm:flex-row sm:items-center text-neutral-500 items-start gap-1">
                  <div className="flex items-center gap-1">
                    <HiOutlineClock /> {preview?.tutor?.availability}
                  </div>
                  <div className="flex gap-2 *:p-2 *:rounded-xl *:bg-emerald-50 text-emerald-500">
                    {preview?.tutor?.locationAvailability.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="flex *:flex *:items-center *:gap-2 gap-2 *:rounded-xl *:p-2 *:px-3 *:text-xl">
              <button
                onClick={() => performAction("book")}
                className="bg-emerald-500 cursor-pointer shadow-md hover:opacity-90 active:opacity-80 transition duration-150 text-white"
              >
                <HiOutlineClock /> Book
              </button>
              <button
                onClick={() => performAction("chat")}
                className="bg-neutral-100 shadow-md text-neutral-500 cursor-pointer hover:opacity-90 active:opacity-80 transition duration-150"
              >
                <HiOutlineChat /> Chat
              </button>

              {preview?.tutor?.isFavorite ? (
                <button
                  onClick={() => performAction("favorite")}
                  className="bg-emerald-100 shadow-md cursor-pointer hover:opacity-90 active:opacity-80 transition duration-150 text-emerald-500"
                >
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
            <Reviews
              user={user}
              reviews={preview?.tutor?.reviews}
              reviewCount={preview?.tutor?.reviewsCount}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TutorPreview;
