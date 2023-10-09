import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import PickDates from "./pages/PickDates/PickDates";
import AddActivities from "./pages/AddActivities/AddActivities";
import AllSet from "./pages/AllSet/AllSet";
import TravelerDetails from "./pages/TravelerDetails/TravelerDetails";
import ReviewDetails from "./pages/ReviewDetails/ReviewDetails";
import YourStay from "./pages/YourStay/YourStay";
import ExploreMarsPage from "./pages/ExploreMarsPage/ExploreMarsPage";
import "./App.scss"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/pickdates" element={<PickDates />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
