import { Link } from "react-router-dom";
import DtDropdown from "./DtDropdown";
import tutorme from "../../../assets/tutorme.png"
import { useContext } from "react";
import { authContext } from "../../../state/authState";
import blankPfp from "../../../assets/blank-profile-picture-hd-images-photo-1.jpeg"

const DtNav = () => {
  const auth = useContext(authContext)
    if(!auth) {
      throw new Error("authContext is undefined")
    }
    const {user} = auth;
  const dropContent: string[] = ["All", "Online", "Home"];
  const dropdowns: string[] = ["tutors", "jobs"];
  return (
    <div className="py-3 px-4 flex items-center justify-between fixed top-0 left-0 right-0">
    
      <Link to="/home">
        <img className="w-12" src={tutorme} alt="" />
      </Link>
      <div className="flex items-center gap-4">
        {
          dropdowns.map((drop,index)=> (
            <DtDropdown key={index} label={drop} dropContent={dropContent}/>
          ))
        }
        <Link className="transition duration-150 hover:scale-102 active:scale-100 p-2 bg-emerald-500  text-white rounded-lg" to="/login">
          Request a tutor
        </Link>

        {
          user? 
          (
            <Link className="contents" to="/dashboard">
              <img className="w-10 rounded-full shadow-sm" src={blankPfp} alt="" />
            </Link>
          )
          :
          (
            <Link className="p-2 hover:scale-102 active:scale-100 transition duration-150  border border-neutral-400 rounded-md" to="/login">Log In</Link>
          )
        }
      </div>
    </div>
  );
};

export default DtNav;
