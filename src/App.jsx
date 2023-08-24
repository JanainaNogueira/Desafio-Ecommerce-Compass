import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/Footer";
import BuyProduct from "./pages/BuyProduct";

function App() {
  return (
    <>
      <Header />
        <BuyProduct></BuyProduct>
      <Footer />
    </>
  );
}

export default App;
