import React from 'react'
import tutors from '../mock/tutors'
import TutorTile from './TutorTile';

const TutorFilter = () => {
  return (
    <div className='p-2 sm:pt-17 flex bg-neutral-100 flex-col gap-2'>
      {
        tutors.map((tutor,i)=> (
          <React.Fragment key={i}>
          <TutorTile {...tutor} />
          </React.Fragment>
        ))
        //handle Loading state on next commit
      }
    </div>
  )
}

export default TutorFilter