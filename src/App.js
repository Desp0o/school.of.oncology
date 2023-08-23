import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/gso/aboutUs";
import GsgAbout from "./pages/gsg/gsgAbout";
import CompletedProjectsGSO from "./pages/gso/completedProjectsGSO";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/gso/AboutUs" element={<AboutUs />} />
        <Route exact path="/pages/gsg/gsgAbout" element={<GsgAbout />} />
        <Route exact path="/pages/gso/completedProjectsGSO" element={<CompletedProjectsGSO />} />
      </Routes>
    </>
  );
}

export default App;
