import "./App.css";
import ProductsContextProvider from "./context/products-context";
import Header from './components/header/header'
import Footer from './components/Footer/index'

function App() {
  return (
    
      <ProductsContextProvider>
        <Header></Header>
        <Footer></Footer>
      </ProductsContextProvider>
   
  );
}

export default App;
