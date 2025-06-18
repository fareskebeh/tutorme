import _React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"

type Props = {}

const App = (_props: Props) => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route/>
      </Routes>
    </Router>
  )
}

export default App