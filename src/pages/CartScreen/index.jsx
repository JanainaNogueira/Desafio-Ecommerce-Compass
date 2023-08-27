import classes from "./index.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/index";
import OrderSummary from "../../components/OrderSummary/index";
import ItemCart from "../../components/ItemCart/index";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

function CartScreen() {
  const { items, removeFromCart, totalPrice } = useContext(CartContext);
  //removeFromCart(1);
  console.log(items);
  
  return (
    <>
      <div className={classes.mainDiv}>
        <Header />
        <section className={classes.summarySection}>
          <OrderSummary totalPrice={totalPrice}/>
          <section className={classes.listItemSection}>
            {items.length > 0 && items.map((item) => (
              <ItemCart
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                amount={item.amount}
                imgUrl={item.image}
                handlerRemoveItem={removeFromCart}
              />
              )
            )}
          </section>
        </section>
        <Footer className={classes.footer} />
      </div>
    </>
  );
}

export default CartScreen;
