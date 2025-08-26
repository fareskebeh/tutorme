import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./app/navigation/Nav";
import NotFound from "./app/fallback/NotFound";
import Loading from "./app/fallback/Loading";
import Public from "./app/authPage/routes/Public";
import Protected from "./app/authPage/routes/Protected";

const Home = lazy(() => import("./app/pages/Home"));
const About = lazy(() => import("./app/pages/About"));
const Faq = lazy(() => import("./app/pages/Faq"));

const TutorPreview = lazy(() => import("./app/tutors/TutorPreview"));
const Subjects = lazy(() => import("./app/tutors/Subjects"));
const Request = lazy(() => import("./app/tutors/Request"));
//const TutorFilter = lazy(() => import("./app/tutors/TutorFilter"));

const Jobs = lazy(() => import("./app/jobs/Jobs"));
const JobPreview = lazy(() => import("./app/jobs/JobPreview"));
const JobApplication = lazy(() => import("./app/jobs/JobApplication"));
const FilterJobs = lazy(() => import("./app/jobs/FilterJobs"));
const Login = lazy(() => import("./app/authPage/Login"));
const Register = lazy(() => import("./app/authPage/Register"));
const ForgotPw = lazy(() => import("./app/authPage/ForgotPw"));
const Verify = lazy(() => import("./app/authPage/Verify"));
const PwReset = lazy(() => import("./app/authPage/PwReset"));
const Dashboard = lazy(() => import("./app/studentDash/Dashboard"));
const Requests = lazy(() => import("./app/studentDash/Requests"));
const HireHistory = lazy(() => import("./app/studentDash/HireHistory"));
const Favorites = lazy(() => import("./app/studentDash/Favorites"));
const Messages = lazy(() => import("./app/studentDash/Messages"));
const Settings = lazy(() => import("./app/studentDash/Settings"));
const Applications = lazy(() => import("./app/tutorDash/Applications"));
const Profile = lazy(() => import("./app/tutorDash/Profile"));
const Panel = lazy(() => import("./app/tutorDash/Panel"));
const Students = lazy(() => import("./app/tutorDash/Students"));
const TSettings = lazy(() => import("./app/tutorDash/TSettings"));
const Earnings = lazy(() => import("./app/tutorDash/Earnings"));

import { authContext } from "./state/authState";
import TutorsList from "./app/tutors/TutorsList";
import TutorsLayout from "./app/tutors/TutorsLayout";

const App = () => {
  type User = {
    username : string;
    pfp: string;
}

  const[vp,setVp] = useState<string>("")

  useEffect(()=> {

      const adjVp=()=> {
        setVp(window.innerWidth <800 ? "small" : "wide")
      }  

      window.addEventListener("resize",adjVp);
      
      adjVp();  

      return ()=> window.removeEventListener("resize",adjVp)
    },[])
  const[guest, setGuest] = useState<string>("")
  const[user,setUser] = useState< User | null>(null)
  return (
    <authContext.Provider value={{user,setUser}}>
    <Router>
      {/* Navigation */}
      <Nav vp={vp}/>

      <Suspense fallback={<Loading/>}>
        <Routes>
          
          {/* General */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq/>}/>
          
          {/* Tutors */}
          <Route path="/tutors" element={<TutorsLayout vp={vp}/>}>
            <Route index element={<TutorsList/>}/>
            <Route path="id/:id" element={<TutorPreview/>}/>
            {/* Actions */}
              <Route path="book/:id"/>
              <Route path="chat/:id"/>

            <Route path="subjects/:subject" element={<Subjects/>}/>
            <Route path="request" element={<Request/>}/>
            {/*<Route path="filter" element={<TutorFilter/>}/>*/}
          </Route>
          
          {/*jobs */}
          <Route path="/jobs" element={<Jobs/>}>
            <Route path=":id" element={<JobPreview/>}/>
            <Route path="apply/:id" element={<JobApplication/>}/>
            <Route path=":method" element={<FilterJobs/>}/>
          </Route>

          {/* auth */}
          <Route path="/register" element={<Public><Register/></Public>}/>
          <Route path="/login" element={<Public><Login setGuest={setGuest}/></Public>}/>
          <Route path="/forgot-password" element={guest==="" ? <Navigate to="*" replace/> : (<Public><ForgotPw guest={guest}/></Public>)}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/reset-password" element={<PwReset/>}/>
          
          {/* student dashboard */}
          <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}>
            <Route path="requests" element={<Protected><Requests/></Protected>} />
            <Route path="hire-history" element={<Protected><HireHistory/></Protected>} />
            <Route path="favorites" element={<Protected><Favorites/></Protected>} />
            <Route path="messages" element={<Protected><Messages/></Protected>} />
            <Route path="settings" element={<Protected> <Settings/></Protected>} />
          </Route>
          
          {/* tutor dashboard */}
          <Route path="/tutor-panel" element={  <Protected><Panel       /></Protected>}>
            <Route path="profile" element={     <Protected><Profile     /></Protected>} />
            <Route path="applications" element={<Protected><Applications/></Protected>} />
            <Route path="my-students" element={ <Protected><Students    /></Protected>} />
            <Route path="messages" element={    <Protected><Messages    /></Protected>} />
            <Route path="earnings" element={    <Protected><Earnings    /></Protected>} />
            <Route path="settings" element={    <Protected><TSettings   /></Protected>} />
          </Route>
          
          {/* catch-all */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </Router>
    </authContext.Provider>
  );
};

export default App;
