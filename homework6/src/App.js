import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import UniversityList from "./components/universitylist/UniversityList";
import UniversityDetail from "./components/universitydetail/UniversityDetail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities/:country" element={<UniversityList />} />
          <Route path="/university/:name" element={<UniversityDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
