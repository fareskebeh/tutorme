import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  dropContent: string[];
  label: string;
  setBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const MbDropdown = ({ label, dropContent, setBar }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const tg = menuRef.current;
      if (tg && e.target instanceof Element && !tg.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", close);

    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div
      ref={menuRef}
      onClick={() => setOpen(!open)}
      className={` p-2 rounded-lg active:bg-neutral-200/50 transition duration-300 relative items-center text-lg flex justify-between`}
    >
      <p>{label === "tutors" ? "Find a Tutor" : label==="jobs" ? "Find Tutor jobs" : ""}</p>

      {(
        <React.Fragment>
          <button className={`${open ? "rotate-180" : ""}`}>
            <HiChevronDown />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col absolute z-60 p-2 w-full *:p-2 bg-white top-10 border rounded-xl border-neutral-400/70"
              >
                { 
                dropContent.map((drop, index) => (
                  <Link
                    onClick={() => setBar(false)}
                    className={`rounded-lg ${
                      location.pathname === `/${label}/${drop.toLowerCase()}`
                        ? "bg-emerald-500 text-white"
                        : ""
                    }`}
                    to={`${
                      label === "tutors" ? "/tutors" : "/jobs"
                    }/${drop.toLowerCase()}`}
                    key={index}
                  >
                    {drop}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </React.Fragment>
      )
      
    }
    </div>
  );
};

export default MbDropdown;
