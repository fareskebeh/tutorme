import {useEffect, useState} from 'react'
import MbNav from './mb/MbNav'
import DtNav from './dt/DtNav'

type Props = {
  vp :string
}


const Nav = (props: Props) => {
  

  return (
    <>
    {
      props.vp === "small" ? <MbNav/> : <DtNav/>
    }
    </>
  )
}

export default Nav