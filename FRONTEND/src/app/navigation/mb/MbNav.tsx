import { Link } from "react-router-dom";
import MbMenu from "./MbMenu";
import tutorme from "../../../assets/tutorme.png"

const MbNav = () => {
  return (
    <div className="py-3 px-4 bg-white flex items-center justify-between fixed z-999 top-0 left-0 right-0">
    
      <Link to="/home">
        <img className="w-12" src={tutorme} alt="" />
      </Link>
      <div className="flex items-center gap-4">
        <Link className="p-2 bg-emerald-500  text-white rounded-lg" to="/login">
          Request a tutor
        </Link>
        <MbMenu/>
      </div>
    </div>
  );
};

export default MbNav;
