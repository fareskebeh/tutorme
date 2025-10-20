import { Link } from "react-router-dom"
import Logo from "../assets/tutorme-bw.png"

const Footer = () => {
  return (
    <div className="dark:bg-slate-900 flex flex-col p-4 shadow-md sm:p-6 md:p-8 gap-8 bg-neutral-200 transition **:transition duration-150">
      <div className="flex gap-4 items-center">
        <p className="text-4xl font-black dark:text-white ">TutorMe</p>
        <img className="w-10 dark:invert-100" src={Logo}/>
        ™
      </div>
      
      
      <div className="space-y-4 *:dark:text-slate-500 text-neutral-700 flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/about">About us</Link>
      </div>

        <p className="text-neutral-700 dark:text-slate-500">TutorMe <span className="align-super">™</span> All rights reserved <span>©</span> {new Date().getFullYear()}</p>

    </div>
  )
}

export default Footer
