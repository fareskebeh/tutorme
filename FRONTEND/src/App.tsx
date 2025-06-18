import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./app/navigation/Nav";
import NotFound from "./app/fallback/NotFound";
import Loading from "./app/fallback/Loading";

const Home = lazy(() => import("./app/pages/Home"));
const About = lazy(() => import("./app/pages/About"));
const Faq = lazy(() => import("./app/pages/Faq"));

const Tutors = lazy(() => import("./app/tutors/Tutors"));
const TutorPreview = lazy(() => import("./app/tutors/TutorPreview"));
const Subjects = lazy(() => import("./app/tutors/Subjects"));
const Request = lazy(() => import("./app/tutors/Request"));
const TutorFilter = lazy(() => import("./app/tutors/TutorFilter"));

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


const App = () => {
  return (
    <Router>
      {/* Navigation */}
      <Nav />

      <Suspense fallback={<Loading/>}>
        <Routes>
          
          {/* General */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq/>}/>
          
          {/* Tutors */}
          <Route path="/tutors" element={<Tutors/>}>
            <Route path=":id" element={<TutorPreview/>}/>
            <Route path="subject/:subject" element={<Subjects/>}/>
            <Route path="request" element={<Request/>}/>
            <Route path=":method" element={<TutorFilter/>}/>
          </Route>
          
          {/*jobs */}
          <Route path="/jobs" element={<Jobs/>}>
            <Route path=":id" element={<JobPreview/>}/>
            <Route path="apply/:id" element={<JobApplication/>}/>
            <Route path=":method" element={<FilterJobs/>}/>
          </Route>

          {/* auth */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPw/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/reset-password/:token" element={<PwReset/>}/>
          
          {/* student dashboard */}
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="requests" element={<Requests/>} />
            <Route path="hire-history" element={<HireHistory/>} />
            <Route path="favorites" element={<Favorites/>} />
            <Route path="messages" element={<Messages/>} />
            <Route path="settings" element={<Settings/>} />
          </Route>
          
          {/* tutor dashboard */}
          <Route path="/tutor-panel" element={<Panel/>}>
            <Route path="profile" element={<Profile/>} />
            <Route path="applications" element={<Applications/>} />
            <Route path="my-students" element={<Students/>} />
            <Route path="messages" element={<Messages/>} />
            <Route path="earnings" element={<Earnings/>} />
            <Route path="settings" element={<TSettings/>} />
          </Route>
          
          {/* catch-all */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
