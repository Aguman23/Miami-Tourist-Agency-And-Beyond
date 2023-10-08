import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ExploreMarsPage from "./pages/ExploreMarsPage/ExploreMarsPage";
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/explore-mars' element={<ExploreMarsPage/>} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
