import {useState,useEffect} from "react"
import MbFaq from "./MbFaq"
import DtFaq from "./DtFaq"

const Faq = () => {

  const[vp,setVp] = useState<string>("")
  
    useEffect(()=> {
  
        const adjVp=()=> {
          setVp(window.innerWidth <800 ? "small" : "wide")
        }  
  
        window.addEventListener("resize",adjVp);
        
        adjVp();  
  
        return ()=> window.removeEventListener("resize",adjVp)
      },[])
  
  return (
    <div className="px-8 pb-8 pt-20 flex h-[100dvh] flex-col">
      <div>
        <p className="mb-4 text-4xl font-bold">Frequently Asked Questions</p>
        <p className="text-lg mb-4 sm:text-xl">If you don’t see your question here, feel free to contact us at support@tutorme.com.</p>
      </div>

      {vp === "small" ? <MbFaq/> : <DtFaq/>}
    </div>
  )
}

export default Faq