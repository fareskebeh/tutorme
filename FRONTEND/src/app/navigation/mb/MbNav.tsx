import { Link } from "react-router-dom";
import MbMenu from "./MbMenu";

type Props = {};

const MbNav = (props: Props) => {
  return (
    <div className="py-3 px-4 flex items-center justify-between fixed top-0 left-0 right-0">
    
      <Link to="/home">Logo</Link>
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
