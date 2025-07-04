import {useState, useRef, useEffect} from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import {motion, AnimatePresence} from "framer-motion"
import {Link} from "react-router-dom"

type Props = {
  dropContent: string[],
  label:string,
}

const DtDropdown = ({label,dropContent}: Props) => {
  const[open,setOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(()=> {
    const close = (e: MouseEvent) => {
      const tg = menuRef.current;
      if(tg && e.target instanceof Element && !tg.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", close)

      return()=> document.removeEventListener("click", close)
  },[])

  return (
    <div ref={menuRef} onClick={()=>setOpen(!open)} className={`*:cursor-pointer p-2 rounded-lg hover:bg-neutral-100/50 active:bg-neutral-200/50 transition duration-300 relative items-center flex gap-2`}>
      <p>{label==="tutors" ? "Find a Tutor" : "Find Tutor jobs" }</p>
      <button className={`transition duration-300 ${open? "-rotate-180" : ""}`}>
        <HiChevronDown/>
      </button>
      
      <AnimatePresence>
      { open &&
      <motion.div initial={{opacity:0, y:-20}} exit={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.2}} className='flex flex-col gap-1 absolute z-60 p-2 w-full *:p-2 bg-white top-10 border rounded-xl border-neutral-400/40'>
        {
          dropContent.map((drop,index)=> (
            <Link onClick={()=>setOpen(false)} className={`cursor-pointer rounded-lg ${location.pathname=== `/${label}/${drop.toLowerCase()}` ? "bg-emerald-500 text-white" : "hover:bg-neutral-100 transition duration-200"}`} to={`${label==="tutors" ? "/tutors" : "/jobs"}/${drop.toLowerCase()}`} key={index}>{drop}</Link>
          ))
        }
      </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}

export default DtDropdown