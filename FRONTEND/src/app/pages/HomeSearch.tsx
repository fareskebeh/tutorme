import { HiSearch } from "react-icons/hi";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineBookOpen } from "react-icons/hi";

const HomeSearch = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: -20, scale: "97%" }}
      whileInView={{ opacity: 1, y: 0, scale: "100%" }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6 my-4 sm:flex-[0.75] rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 shadow-lg"
    >
      <div className="text-2xl space-y-4">
        <p className="font-bold">Enter the subject:</p>
        <div className="relative">
        <HiOutlineBookOpen className="absolute text-neutral-500 top-4 left-4"/>
        <input
          className="p-3 text-2xl bg-neutral-300/50 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
          placeholder="e.g: Math, Physics.."
          type="text"
        />
        </div>
      </div>

      <div className="text-2xl space-y-4">
        <p className="font-bold">Enter the subject:</p>
        <div className="relative">
        <HiOutlineLocationMarker className="absolute text-neutral-500 top-4 left-4"/>
        <input
          className="p-3 text-2xl bg-neutral-300/50 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 pl-12 border-neutral-300"
          placeholder="e.g: Math, Physics.."
          type="text"
        />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="cursor-pointer hover:scale-102 transition duration-200 bg-emerald-500 text-white flex items-center gap-2 active:scale-98 font-bold text-2xl p-3 rounded-xl">
          <HiSearch /> Search
        </button>
      </div>
    </motion.form>
  );
};

export default HomeSearch;
