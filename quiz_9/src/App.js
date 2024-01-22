import { HOME_PAGE, PRODUCTS_PAGE, CART_PAGE } from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import SignIn from "./pages/SignIn/SignIn";
import ProductsPage from "./pages/Productspage/ProductsPage";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <Router>
            <Header />
            <Routes>
              <Route path={HOME_PAGE} element={<SignIn />} />
              <Route path={PRODUCTS_PAGE} element={<ProductsPage />} />
              <Route path={CART_PAGE} element={<Cart />} />
            </Routes>
            <Footer />
          </Router>
        </ProductProvider>
      </UserProvider>
    </div>
  );
};

export default App;
