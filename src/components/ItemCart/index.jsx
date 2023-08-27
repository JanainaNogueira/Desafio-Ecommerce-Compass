/* eslint-disable react/prop-types */
import classes from "./index.module.css";

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

      <div className={classes.itemQuantity}>
        <svg
          width="12"
          height="2"
          viewBox="0 0 12 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.666626"
            y="0.333374"
            width="10.6667"
            height="1"
            rx="0.5"
            fill="#666666"
          />
        </svg>
        <p>{amount}</p>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9166 5.58329H6.41663V1.08329C6.41663 0.853168 6.23008 0.666626 5.99996 0.666626C5.76983 0.666626 5.58329 0.853168 5.58329 1.08329V5.58329H1.08329C0.853168 5.58329 0.666626 5.76983 0.666626 5.99996C0.666626 6.23008 0.853168 6.41663 1.08329 6.41663H5.58329V10.9166C5.58329 11.1468 5.76983 11.3333 5.99996 11.3333C6.23008 11.3333 6.41663 11.1468 6.41663 10.9166V6.41663H10.9166C11.1468 6.41663 11.3333 6.23008 11.3333 5.99996C11.3333 5.76983 11.1468 5.58329 10.9166 5.58329Z"
            fill="#333333"
          />
        </svg>
      </div>

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
