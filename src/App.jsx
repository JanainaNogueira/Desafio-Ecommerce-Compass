import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductsContextProvider from "./context/products-context";
import BuyProduct from "./pages/BuyProduct";

const router = createBrowserRouter([
  { path: "/products/:productId", element: <BuyProduct></BuyProduct> },
]);

function App() {
  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  );
}

export default App;
