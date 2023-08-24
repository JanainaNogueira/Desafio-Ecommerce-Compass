import "./App.css";
import ProductsContextProvider from "./context/products-context";
import BuyProduct from "./pages/BuyProduct";
import Header from './components/header/header'
import Footer from './components/Footer/index'

function App() {
  return (
    
      <ProductsContextProvider>
      
        <BuyProduct></BuyProduct>
      </ProductsContextProvider>
   
  );
}

export default App;
