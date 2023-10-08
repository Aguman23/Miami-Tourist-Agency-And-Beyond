import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import PickDates from "./pages/PickDates/PickDates";
import AddActivities from "./pages/AddActivities/AddActivities";
import AllSet from "./pages/AllSet/AllSet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/pickdates" element={<PickDates />} />
        <Route path="/addactivities" element={<AddActivities />} />
        <Route path="/allset" element={<AllSet />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
