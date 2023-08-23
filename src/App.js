import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/gso/aboutUs";
import GsgAbout from "./pages/gsg/gsgAbout";
import CompletedProjectsGSO from "./pages/gso/completedProjectsGSO";
import Conference1 from "./pages/gso/completedProjectsGSO/conference1";
import Conference2 from "./pages/gso/completedProjectsGSO/conference2";
import Footer from "./components/footer/footer";
import FutureProjects from "./pages/gso/futureProjects";
import UpcomingConference from "./pages/gso/futureProjectsGSO/upcomingConference";
import Books from "./pages/gso/books";
import Patient from "./pages/gso/patient";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/gso/AboutUs" element={<AboutUs />} />
        <Route exact path="/pages/gsg/gsgAbout" element={<GsgAbout />} />
        <Route exact path="/pages/gso/completedProjectsGSO" element={<CompletedProjectsGSO />} />
        <Route exact path="/pages/gso/completedProjectsGSO/conference1" element={<Conference1 />}/>
        <Route exact path="/pages/gso/completedProjectsGSO/conference2" element={<Conference2 />}/>
        <Route exact path="/pages/gso/futureProjects" element={<FutureProjects />}/>
        <Route exact path="/pages/gso/completedProjectsGSO/upcomingConference" element={<UpcomingConference />}/>
        <Route exact path="/pages/gso/books" element={<Books />}/>
        <Route exact path="/pages/gso/patient" element={<Patient />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
