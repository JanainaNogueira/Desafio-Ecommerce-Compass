import './App.css'
import BuyButton from './components/BuyButton'
import CartButton from './components/CartButton'
import FavoriteButton from './components/FavoriteButton'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Footer></Footer>
      <FavoriteButton></FavoriteButton>
      <CartButton></CartButton>
      <BuyButton></BuyButton>
    </>
  )
}

export default App
