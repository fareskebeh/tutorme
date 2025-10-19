import { useState } from 'react'
import { faqs } from './faqData'
import { HiChevronRight } from 'react-icons/hi'


const DtFaq = () => {
  const[curr,setCurr] = useState(0)
  return (
    <div className='flex max-h-full overflow-hidden gap-4 *:rounded-3xl *:border *:border-neutral-400/30 dark:*:border-slate-700/30 *:shadow-md'>
      <div className='w-[30%] flex flex-col p-4 overflow-hidden py-4'>
        <div className='overflow-x-hidden flex rounded-lg flex-col gap-2 overflow-y-scroll scrollbar-hide'>
        {
          faqs.map((faq,index)=> (
           <div onClick={()=>setCurr(index)} className={`${index===curr ? "bg-emerald-500 dark:bg-emerald-600 text-white" : "hover:bg-neutral-100 dark:hover:bg-slate-900 dark:text-white"} transition  duration-200 hover:-translate-y-1 cursor-pointer active:translate-y-0 rounded-xl text-lg p-2 px-4 flex justify-between items-center gap-4`} key={index}>
            <p>{faq.q}</p>
            <HiChevronRight className={`${index===curr ? 'text-white' : 'text-neutral-500 dark:text-slate-500'}`} size={24}/>
           </div> 
          ))
        }
        </div>
      </div>

      <div className='w-[70%] p-6'>
        <div className='flex h-full justify-center flex-col overflow-x-hidden gap-3 overflow-y-auto'>
          <p className='text-3xl dark:text-white font-bold'>{faqs[curr].q}</p>
          <p className='text-xl dark:text-slate-400 leading-relaxed pl-4'>{faqs[curr].a}</p>
        </div>
      </div>
    </div>
  )
}

export default DtFaq