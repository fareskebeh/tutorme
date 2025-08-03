import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff, HiExclamation } from "react-icons/hi";
import tutorme from "../../assets/tutorme.png";
import {motion, AnimatePresence} from "framer-motion"

type Credentials = {
  email: string;
  password: string;
};

type Props = {
  setGuest: React.Dispatch<React.SetStateAction<string>>
}

const Login = (props: Props) => {
  const navigate = useNavigate()
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pwVis, setPwVis] = useState(false);
  const guestRef = useRef<HTMLInputElement>(null)
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    const { email, password } = credentials;
    if (!email.trim() || !password) {
      setMsg("Please fill out all fields.");
      setLoading(false);
      return;
    }

    setMsg(null);
    //placeholder in case of success
  };

  const forgotPass=()=> {
    if(!guestRef.current?.validity.valid || guestRef.current?.value === "") {
      setMsg("Enter a valid email")
      return;
    }
    props.setGuest(guestRef.current?.value)
    navigate("/forgot-password")
  }

  return (
    <div className="pt-20 h-[100dvh] flex items-center gap-20 *:flex-1 justify-center px-8 sm:px-20 py-4">
      <form onSubmit={login} className="flex relative flex-col gap-2">
        <p className="text-3xl font-black">Log into your Tutorme account</p>
        <p className="text-xl font-bold text-neutral-400">
          New user?{" "}
          <Link className="text-emerald-500" to="/register">
            Register
          </Link>{" "}
          here
        </p>
        <input
          ref={guestRef}
          value={credentials.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="p-3 text-2xl bg-neutral-100 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 border-neutral-300 invalid:border-red-500 invalid:caret-red-500 invalid:bg-red-100 invalid:text-red-700 transition duration-200"
          type="email"
          placeholder="Email"
          name=""
        />
        <div className="relative">
          <input
            value={credentials.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="p-3 text-2xl bg-neutral-100 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 border-neutral-300"
            type={pwVis ? "text" : "password"}
            placeholder="Password"
            name=""
          />
          <button
            onClick={() => setPwVis(!pwVis)}
            className={`transition duration-200 cursor-pointer absolute right-5 top-4.5 ${
              pwVis ? "text-black" : "text-neutral-400"
            }`}
            type="button"
          >
            {pwVis ? <HiOutlineEye size={24} /> : <HiOutlineEyeOff size={24} />}
          </button>
        </div>
        <div className="flex gap-2">
          <p className="text-lg text-neutral-500">Remember me?</p>
          <div className="relative">
            <input className="hidden peer" type="checkbox" id="remember" />
            <label
              className="peer-checked:bg-emerald-500 cursor-pointer before:transition before:duration-300 peer-checked:before:translate-x-6 transition duration-300 absolute inset-0 w-12 before:content-[''] before:absolute before:h-4 before:bg-white before:w-4 pl-1 before:top-1/2 before:-translate-y-1/2 before:rounded-full bg-neutral-300 rounded-2xl"
              htmlFor="remember"
            />
          </div>
        </div>
        <button
          disabled={loading}
          className={`p-4 ${loading ? "bg-emerald-700" : "bg-emerald-400"} flex justify-center items-center shadow-md text-2xl font-bold rounded-xl text-white active:opacity-80 transition duration-200 cursor-pointer`}
          type="submit"
        >
          {loading ? <div className="loader my-2"></div> : "Log In"}
        </button>
        <p onClick={forgotPass} className="text-lg cursor-pointer text-neutral-500">
          Forgot Password?
        </p>
        <AnimatePresence>
          {msg ? (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-red-500 text-l flex gap-2 items-center absolute left-0 -bottom-10"
            >
              <HiExclamation /> {msg}
            </motion.p>
          ) : (
            ""
          )}
          </AnimatePresence>
      </form>
      <div className="hidden justify-center items-center sm:flex">
        <div className="flex flex-col items-center justify-center gap-8">
          <img src={tutorme} className="w-70" alt="" />
          <p className="tracking-widest text-3xl text-emerald-600 font-bold">TUTORME</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
