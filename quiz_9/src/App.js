import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <Router>
            <Header />
            <AppRoutes />
            <Footer />
          </Router>
        </ProductProvider>
      </UserProvider>
    </div>
  );
};

export default App;
