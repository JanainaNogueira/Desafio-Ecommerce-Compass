/* eslint-disable react/prop-types */
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";


const BuyButton = ({addToCart, quantity}) => {
  const navigate = useNavigate();


  return (
    <button className={classes.buyButton}>
      <p>Comprar</p>
    </button>
  );
};

export default BuyButton;


