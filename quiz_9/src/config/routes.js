import Cart from "../components/Cart/Cart";
import appRoutes from "../constants/routes";
import ProductsPage from "../pages/Productspage/ProductsPage";
import SignIn from "../pages/SignIn/SignIn";

const routes = [
  {
    path: appRoutes.HOME_PAGE,
    Component: SignIn,
  },
  {
    path: appRoutes.PRODUCTS_PAGE,
    Component: ProductsPage,
  },
  {
    path: appRoutes.CART_PAGE,
    Component: Cart,
  },
];
export default routes;
