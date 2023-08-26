import classes from "./index.module.css";
import Header from "../../components/header/";
import Footer from "../../components/Footer/index";
import OrderSummary from "../../components/OrderSummary/index";
import ItemCart from "../../components/ItemCart/index";

function CartScreen() {
  const itens = [
    { id: 1,
      price: 5000,
      title: "Celular Apple iPhone com dois sims e 64 GB, além de duas câmeras",
      quantity: 1,
      totalPrice: 5000,
      imgUrl: '../../src/assets/img/iphone.png'
    },
    { id: 2,
      price: 5000,
      title: "Celular Apple iPhone com dois sims e 64 GB, além de duas câmeras",
      quantity: 1,
      totalPrice: 5000,
      imgUrl: '../../src/assets/img/iphone.png'
    },
    { id: 2,
      price: 5000,
      title: "Celular Apple iPhone com dois sims e 64 GB, além de duas câmeras",
      quantity: 3,
      totalPrice: 5000,
      imgUrl: '../../src/assets/img/iphone.png'
    },
    { id: 3,
      price: 5000,
      title: "Celular Apple iPhone com dois sims e 64 GB, além de duas câmeras",
      quantity: 1,
      totalPrice: 5000,
      imgUrl: '../../src/assets/img/iphone.png'
    },
  ];

  

  return (
    <>
      <div className={classes.mainDiv}>
        <Header />
        <section className={classes.summarySection}>
          <OrderSummary />
          <section className={classes.listItemSection}>
            {itens.map((item) => (<ItemCart price={item.price} title={item.title} quantity={item.quantity} totalPrice={item.totalPrice} imgUrl={item.imgUrl}/>))}
          </section>
        </section>
        <Footer className={classes.footer}/>
      </div>
    </>
  );
}

export default CartScreen;
