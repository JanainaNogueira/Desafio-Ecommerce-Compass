import ItemCart from './components/ItemCart/index'
import './App.css'
import Header from './components/header/header'
import Footer from './components/Footer'

import OrderSummary from './components/OrderSummary/index'

function App() {

  return (
    <>
      <Header></Header>
      <OrderSummary/>
      <ItemCart/>
      <Footer></Footer>
    </>
  )
}

export default App
