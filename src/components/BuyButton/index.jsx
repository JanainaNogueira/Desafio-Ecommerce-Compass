import classes from "./index.module.css";

const BuyButton = () => {
  return (
    <button className={classes.buyButton}>
      <p>Comprar</p>
    </button>
  );
};

export default BuyButton;

//fill={isOnCart ? 'white' : 'black'}
