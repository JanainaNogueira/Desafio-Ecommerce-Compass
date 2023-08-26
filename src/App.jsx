import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductsContextProvider from "./context/products-context";
import Home from './pages/home'
import BuyProduct from "./pages/BuyProduct";
import CartScreen from "./pages/CartScreen";

const router = createBrowserRouter([
  { path: "/home", element: <Home></Home> },
  { path: "/products/:productId", element: <BuyProduct></BuyProduct> },
  { path: "/cart", element: <CartScreen></CartScreen> },
]);

function App() {
  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  );
}

export default App;
