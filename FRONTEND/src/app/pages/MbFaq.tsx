import {Fragment} from "react"
import { faqs } from "./faqData"
import Expandable from "./Expandable"

const MbFaq = () => {
  return (
    <div>
      {
        faqs.map((faq,index)=> (
          <Fragment key={index}>
            <Expandable question={faq.q} answer={faq.a}/>
          {
            index!==faqs.length-1 ? <div className="h-px bg-neutral-200 dark:bg-slate-900"/> : ""
          }
          </Fragment>
        ))
      }
    </div>
  )
}

export default MbFaq