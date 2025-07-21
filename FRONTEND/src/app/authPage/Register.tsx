import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff, HiExclamation } from "react-icons/hi";
import tutorme from "../../assets/tutorme.png";
import { motion, AnimatePresence } from "framer-motion";

type Credentials = {
  firstName: string;
  lastName: string;
  email: string;
  firstPassword: string;
  secondPassword: string;
};

const Register = () => {
  const[loading,setLoading] = useState(false)
  const [pwVis, setPwVis] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>({
    firstName: "",
    lastName: "",
    email: "",
    firstPassword: "",
    secondPassword: "",
  });
  const [msg, setMsg] = useState<null | string>(null);

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null)
    setLoading(true)
    const { firstName, lastName, email, firstPassword, secondPassword } =
      credentials;
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !firstPassword ||
      !secondPassword
    ) {
      setMsg("Please fill out all fields.");
      setLoading(false)
      return;
    }

    if (firstPassword !== secondPassword) {
      setMsg("Passwords do not match.");
      setLoading(false)
      return;
    }

    setMsg(null)
    //placeholder in case of success
  };

  return (
    <div className="pt-20 h-[100dvh] flex items-center gap-20 *:flex-1 justify-center px-8 sm:px-20 py-4">
      <form onSubmit={register} className="relative flex flex-col gap-2">
        <p className="text-3xl font-black">Create a Tutorme account</p>
        <p className="text-xl font-bold text-neutral-400">
          Already a user?{" "}
          <Link className="text-emerald-500" to="/login">
            Log In
          </Link>{" "}
          here
        </p>

        <div className="flex gap-2 *:flex-1">
          <input
            value={credentials.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, firstName: e.target.value })
            }
            className="p-3 text-2xl bg-neutral-100 caret-emerald-500 outline-none border rounded-xl border-b-2 border-neutral-300 invalid:border-red-500 invalid:caret-red-500 invalid:bg-red-100 invalid:text-red-700 transition duration-200"
            type="text"
            placeholder="First Name"
            name=""
          />
          <input
            value={credentials.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, lastName: e.target.value })
            }
            className="p-3 text-2xl bg-neutral-100 caret-emerald-500 outline-none border rounded-xl border-b-2 border-neutral-300 invalid:border-red-500 invalid:caret-red-500 invalid:bg-red-100 invalid:text-red-700 transition duration-200"
            type="text"
            placeholder="Last Name"
            name=""
          />
        </div>

        <input
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
            value={credentials.firstPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, firstPassword: e.target.value })
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
        <input
          value={credentials.secondPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCredentials({ ...credentials, secondPassword: e.target.value })
          }
          className="p-3 text-2xl bg-neutral-100 caret-emerald-500 outline-none border w-full rounded-xl border-b-2 border-neutral-300"
          type={pwVis ? "text" : "password"}
          placeholder="Confirm Password"
          name=""
        />

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
          className={`p-4 ${loading ? "bg-emerald-700" : "bg-emerald-400"} cursor-pointer flex justify-center items-center shadow-md text-2xl font-bold rounded-xl text-white active:opacity-80 transition duration-200`}
          type="submit"
        >
          {loading ? <div className="loader my-2"></div> : "Create my account"}
        </button>
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
        <div className="flex flex-col">
          <img src={tutorme} alt="" />
          <p>TUTORME</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
