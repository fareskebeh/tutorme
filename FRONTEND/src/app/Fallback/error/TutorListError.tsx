import { HiExclamation } from 'react-icons/hi'

const TutorListError = () => {
  return (
    <div className='h-full flex flex-col rounded-xl shadow-md bg-white dark:bg-slate-950 transition duration-150 items-center justify-center'>
      <HiExclamation color='#ff0000' size={100}/>
        <p className='text-red-500 text-2xl w-80 text-center font-bold'>An error occurred, Try again later</p>
    </div>
  )
}

export default TutorListError
