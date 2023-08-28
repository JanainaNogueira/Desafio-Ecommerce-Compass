import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductsContextProvider from "./context/products-context";
import Home from './pages/home'
import BuyProduct from "./pages/BuyProduct";
import CartScreen from "./pages/CartScreen";
import CartContextProvider from "./context/cart-context";

const router = createBrowserRouter([
  { index:true , element: <Home></Home> },
  { path: "/products/:productId", element: <BuyProduct></BuyProduct> },
  { path: "/cart", element: <CartScreen></CartScreen> },
]);

function App() {
  return (
    <CartContextProvider>  
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
