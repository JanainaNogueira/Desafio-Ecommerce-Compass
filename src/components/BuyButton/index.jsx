/* eslint-disable react/prop-types */
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";


const BuyButton = ({addToCart, quantity}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log(quantity);
    addToCart(quantity);
    navigate("/cart")
  };

  return (
    <button onClick={handleButtonClick} className={classes.buyButton}>
      <p>Comprar</p>
    </button>
  );
};

export default BuyButton;


