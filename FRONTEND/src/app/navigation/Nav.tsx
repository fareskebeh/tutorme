import {useEffect, useState} from 'react'
import MbNav from './mb/MbNav'
import DtNav from './dt/DtNav'

const Nav = () => {
  const[vp,setVp] = useState<string>("")

  useEffect(()=> {

      const adjVp=()=> {
        setVp(window.innerWidth <500 ? "small" : "wide")
      }  

      window.addEventListener("resize",adjVp);
      
      adjVp();  

      return ()=> window.removeEventListener("resize",adjVp)
    },[])

  return (
    <>
    {
      vp === "small" ? <MbNav/> : <DtNav/>
    }
    </>
  )
}

export default Nav