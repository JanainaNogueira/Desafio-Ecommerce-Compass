/* eslint-disable react/prop-types */
import classes from "./index.module.css";
import QuantityChanger from '../QuantityChanger/index';

function ItemCart({ id, price, amount, title, handlerRemoveItem, imgUrl }) {

  return (
    <div className={classes.mainDiv} key={id}>
      <button
        className={classes.buttonCancel}
        onClick={() => handlerRemoveItem(id)}
      >
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.19526 3.96278C1.93491 3.70243 1.93491 3.28032 2.19526 3.01997C2.45562 2.75962 2.87772 2.75962 3.13807 3.01997L5.99999 5.88189L8.86189 3.01997C9.12225 2.75962 9.54438 2.75962 9.80473 3.01997C10.0651 3.28032 10.0651 3.70243 9.80473 3.96278L6.94279 6.8247L9.80473 9.6866C10.0651 9.94695 10.0651 10.3691 9.80473 10.6294C9.54438 10.8898 9.12225 10.8898 8.86189 10.6294L5.99999 7.76749L3.13807 10.6294C2.87772 10.8898 2.45562 10.8898 2.19526 10.6294C1.93491 10.3691 1.93491 9.94695 2.19526 9.6866L5.05718 6.8247L2.19526 3.96278Z"
            fill="#444444"
          />
        </svg>
      </button>

      <p className={classes.price}>
        {(price * amount).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <QuantityChanger quantitya={amount}/>

      <div className={classes.divInfo}>
        <p>{title}</p>
        <p>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <img src={imgUrl} alt="iphone" className={classes.imgItem} />
    </div>
  );
}

export default ItemCart;
