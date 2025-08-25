import { Link, useLocation } from "react-router-dom";
import DtDropdown from "./DtDropdown";
import tutorme from "../../../assets/tutorme.png";
import { useContext } from "react";
import { authContext } from "../../../state/authState";
import blankPfp from "../../../assets/blank-profile-picture-hd-images-photo-1.jpeg";
import { HiOutlineMoon } from "react-icons/hi";

const DtNav = () => {
  const location = useLocation();
  const auth = useContext(authContext);
  if (!auth) {
    throw new Error("authContext is undefined");
  }
  const { user } = auth;
  const dropContent: string[] = ["All", "Online", "Home"];
  const dropdowns: string[] = ["tutors", "jobs"];
  return (
    <div className="py-2 bg-white px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-[899] *:z-[899]">
      <div className="flex *:transition duration-300 items-center gap-4">
        <Link className="px-4" to="/home">
          <img className="w-[25px]" src={tutorme} alt="" />
        </Link>

        {dropdowns.map((drop, index) => (
          <DtDropdown key={index} label={drop} dropContent={dropContent} />
        ))}
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "bg-emerald-500 text-white" : ""
          } rounded-md p-2`}
        >
          About
        </Link>
        <Link
          to="/faq"
          className={`${
            location.pathname === "/faq" ? "bg-emerald-500 text-white" : ""
          } rounded-md p-2`}
        >
          FAQ
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="transition duration-150 hover:scale-102 active:scale-100 p-2 bg-emerald-500  text-white rounded-lg"
          to="/login"
        >
          Request a tutor
        </Link>

        <div className={`flex items-center gap-4 ${user? "bg-neutral-300/40" : ""} p-2 rounded-4xl`}>
          {user ? (
            <Link className="contents" to="/dashboard">
              <img
                className="w-10 rounded-full shadow-sm"
                src={blankPfp}
                alt=""
              />
            </Link>
          ) : (
            <Link
              className="p-2 hover:scale-102 active:scale-100 transition duration-150  border border-neutral-400 rounded-md"
              to="/login"
            >
              Log In
            </Link>
          )}
          <button className="rounded-full hover:bg-neutral-200 active:bg-neutral-300/70 transition duration-200 p-1 cursor-pointer">
            <HiOutlineMoon color="#606060" size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DtNav;
