import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./app/navigation/Nav";
import NotFound from "./app/fallback/NotFound";
import Loading from "./app/fallback/Loading";
import Public from "./app/authPage/routes/Public";
import Protected from "./app/authPage/routes/Protected";

const Home = lazy(() => import("./app/pages/Home"));
const About = lazy(() => import("./app/pages/About"));
const Faq = lazy(() => import("./app/pages/Faq"));

const TutorPreview = lazy(() => import("./app/tutors/TutorPreview"));
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
const TutorsList = lazy(()=>import("./app/tutors/TutorsList"));
const TutorsLayout = lazy(()=> import("./app/tutors/TutorsLayout"));

import { authContext } from "./state/authState";
import { useTheme } from "./hooks/useTheme";


type User = {
  username: string;
  pfp: string;
};

const App = () => {
  const{theme} = useTheme()
  const [vp, setVp] = useState<string>("");
  useEffect(()=> {
    if (theme==="light") {
      document.body.style.backgroundColor = "#fff"
    }
    else {
      document.body.style.backgroundColor = "#020617"
    }
  },[theme])
  useEffect(() => {
    const adjVp = () => {
      setVp(window.innerWidth < 800 ? "small" : "wide");
    };

    window.addEventListener("resize", adjVp);

    adjVp();

    return () => window.removeEventListener("resize", adjVp);
  }, []);
  const [guest, setGuest] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  return (
    <authContext.Provider value={{ user, setUser }}>
        <Router>
          <Nav vp={vp} />

          <Routes>
            <Route path="/home" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
            <Route path="/faq" element={<Suspense fallback={<Loading />}><Faq /></Suspense>} />

            <Route path="/tutors" element={<Suspense fallback={<Loading />}><TutorsLayout vp={vp} /></Suspense>}>
              <Route index element={<Suspense fallback={<Loading />}><TutorsList /></Suspense>} />
              <Route path="id/:id" element={<Suspense fallback={<Loading />}><TutorPreview /></Suspense>} />
              <Route path="book/:id" />
              <Route path="chat/:id" />
            </Route>

            <Route path="/jobs" element={<Suspense fallback={<Loading />}><Jobs /></Suspense>}>
              <Route path=":id" element={<Suspense fallback={<Loading />}><JobPreview /></Suspense>} />
              <Route path="apply/:id" element={<Suspense fallback={<Loading />}><JobApplication /></Suspense>} />
              <Route path=":method" element={<Suspense fallback={<Loading />}><FilterJobs /></Suspense>} />
            </Route>

            <Route path="/register" element={<Suspense fallback={<Loading />}><Public><Register /></Public></Suspense>} />
            <Route path="/login" element={<Suspense fallback={<Loading />}><Public><Login setGuest={setGuest} /></Public></Suspense>} />
            <Route path="/forgot-password" element={guest === "" ? <Navigate to="*" replace /> : <Suspense fallback={<Loading />}><Public><ForgotPw guest={guest} /></Public></Suspense>} />
            <Route path="/verify" element={<Suspense fallback={<Loading />}><Verify /></Suspense>} />
            <Route path="/reset-password" element={<Suspense fallback={<Loading />}><PwReset /></Suspense>} />

            <Route path="/dashboard" element={<Suspense fallback={<Loading />}><Protected><Dashboard /></Protected></Suspense>}>
              <Route path="requests" element={<Suspense fallback={<Loading />}><Protected><Requests /></Protected></Suspense>} />
              <Route path="hire-history" element={<Suspense fallback={<Loading />}><Protected><HireHistory /></Protected></Suspense>} />
              <Route path="favorites" element={<Suspense fallback={<Loading />}><Protected><Favorites /></Protected></Suspense>} />
              <Route path="messages" element={<Suspense fallback={<Loading />}><Protected><Messages /></Protected></Suspense>} />
              <Route path="settings" element={<Suspense fallback={<Loading />}><Protected><Settings /></Protected></Suspense>} />
            </Route>

            <Route path="/tutor-panel" element={<Suspense fallback={<Loading />}><Protected><Panel /></Protected></Suspense>}>
              <Route path="profile" element={<Suspense fallback={<Loading />}><Protected><Profile /></Protected></Suspense>} />
              <Route path="applications" element={<Suspense fallback={<Loading />}><Protected><Applications /></Protected></Suspense>} />
              <Route path="my-students" element={<Suspense fallback={<Loading />}><Protected><Students /></Protected></Suspense>} />
              <Route path="messages" element={<Suspense fallback={<Loading />}><Protected><Messages /></Protected></Suspense>} />
              <Route path="earnings" element={<Suspense fallback={<Loading />}><Protected><Earnings /></Protected></Suspense>} />
              <Route path="settings" element={<Suspense fallback={<Loading />}><Protected><TSettings /></Protected></Suspense>} />
            </Route>

            <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
          </Routes>
        </Router>
    </authContext.Provider>
  );
};

export default App;
