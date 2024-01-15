import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import UniversityList from "./pages/universitylist/UniversityList";
import UniversityDetail from "./pages/universitydetail/UniversityDetail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import appRoutes from "../src/constants/routes";
import NotFound from "./pages/not-found/NotFound";
import CustomError from "./pages/custom-error/CustomError";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={appRoutes.home} element={<Home />} />
          <Route
            path={appRoutes.universitiesCountry}
            element={<UniversityList />}
          />
          <Route
            path={appRoutes.universityName}
            element={<UniversityDetail />}
          />
          <Route path={appRoutes.customError} element={<CustomError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
