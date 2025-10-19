import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiExclamation, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

type Password = {
  first: string;
  second: string;
};

const PwReset = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")
  const navigate = useNavigate();
  const oldPw = "12345678"; // placeholder
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [pwVis, setPwVis] = useState<boolean>(false);
  const [newPw, setNewPw] = useState<Password>({
    first: "",
    second: "",
  });
  const verifyPw = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (newPw?.first === "" || newPw?.second === "") {
      setMsg("Please fill out both fields");
      setLoading(false);
      return;
    }
    if (newPw?.first !== newPw?.second) {
      setMsg("Passwords do not match");
      setLoading(false);
      return;
    }

    if (newPw?.first === oldPw) {
      setMsg("Your new password cannot be the old password");
      setLoading(false);
      return;
    }

    if (newPw?.first.length < 8) {
      setMsg("Password cannot be less than 8 characters long");
      setLoading(false);
      return;
    }

    // fetch logic for password reset

    navigate("/login");
  };

  if(!token) {
    return <Navigate to="/login"/>
  }

  return (
    <div className="pt-20 h-[100dvh] flex gap-8 flex-col sm:flex-row items-center justify-center px-8">
      <div className="space-y-4">
        <p className="text-4xl sm:text-5xl font-bold dark:text-white md:text-6xl">
          Change Password
        </p>
        <p className="text-xl px-2 dark:text-slate-500 sm:text-2xl">
          Pick a password that is strong, and you could remember easily
        </p>
      </div>

      <form
        onSubmit={verifyPw}
        className="flex flex-col items-center gap-2 *:w-full sm:w-[30%] relative"
      >
        <div className="relative">
          <input
            value={newPw.first}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPw({ ...newPw, first: e.target.value })
            }
            className="p-3 text-2xl dark:text-white bg-neutral-100 dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-600 caret-emerald-500 outline-none transition duration-150 border w-full rounded-xl border-b-2 border-neutral-300"
            type={pwVis ? "text" : "password"}
            placeholder="Password"
            name=""
          />
          <button
            onClick={() => setPwVis(!pwVis)}
            className={`transition duration-200 cursor-pointer absolute right-5 top-4.5 ${
              pwVis ? "text-black dark:text-white" : "text-neutral-400 dark:text-slate-500"
            }`}
            type="button"
          >
            {pwVis ? <HiOutlineEye size={24} /> : <HiOutlineEyeOff size={24} />}
          </button>
        </div>
        <input
          value={newPw?.second}
          type={pwVis ? "text" : "password"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPw({ ...newPw, second: e.target.value })
          }
          placeholder="Confirm New Password"
          className="p-3 text-2xl dark:text-white bg-neutral-100 caret-emerald-500 outline-none border dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-600 rounded-xl border-b-2 transition duration-150 border-neutral-300"
        />

        <button
          disabled={loading}
          className={`p-4 ${
            loading ? "bg-emerald-700" : "bg-emerald-400"
          } flex justify-center items-center shadow-md text-2xl font-bold rounded-xl text-white active:opacity-80 transition duration-200 cursor-pointer`}
          type="submit"
        >
          {loading ? <div className="loader my-2"></div> : "Reset Password"}
        </button>

        <AnimatePresence>
          {msg ? (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-red-500 text-lg flex gap-2 items-center absolute left-0 -bottom-16 sm:-bottom-10"
            >
              <HiExclamation /> {msg}
            </motion.p>
          ) : (
            ""
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default PwReset;
