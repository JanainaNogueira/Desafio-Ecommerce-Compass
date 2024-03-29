/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import classes from "./index.module.css";

const QuantitySetter = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => onQuantityChange(quantity), [quantity, onQuantityChange]);

  return (
    <div className={classes.quantityContainer}>
      <div onClick={handleQuantityDecrement} className={classes.quantityButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="2"
          viewBox="0 0 12 2"
          fill="none"
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
      </div>
      <div className={classes.quantityCounter}>{quantity}</div>
      <div onClick={handleQuantityIncrement} className={classes.quantityButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10.9166 5.58329H6.41663V1.08329C6.41663 0.853168 6.23008 0.666626 5.99996 0.666626C5.76983 0.666626 5.58329 0.853168 5.58329 1.08329V5.58329H1.08329C0.853168 5.58329 0.666626 5.76983 0.666626 5.99996C0.666626 6.23008 0.853168 6.41663 1.08329 6.41663H5.58329V10.9166C5.58329 11.1468 5.76983 11.3333 5.99996 11.3333C6.23008 11.3333 6.41663 11.1468 6.41663 10.9166V6.41663H10.9166C11.1468 6.41663 11.3333 6.23008 11.3333 5.99996C11.3333 5.76983 11.1468 5.58329 10.9166 5.58329Z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuantitySetter;
