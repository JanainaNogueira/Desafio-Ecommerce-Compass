/* eslint-disable react/prop-types */
import CartButton from "../CartButtonAlternate";
import BuyButton from "../BuyButton";
import Star from "../Star";
import classes from "./index.module.css";
import ProductImage from "../ProductImage";
import QuantitySetter from "../QuantitySetter";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cart-context";

const ProductData = ({ product }) => {
  const { id, title, price, description, rating } = product;
  const starsArray = [0, 1, 2, 3, 4];

  const cartCtx = useContext(CartContext);

  const [sellPrice, setSellPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(1);

  const onQuantityChange = (quantity) => {
    const newPrice = (price*quantity).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    setSellPrice(newPrice);
    setProductQuantity(quantity);
  };

  const addToCartHandler = (amount) => {
    const cartItem = {
      id: id,
      title: title,
      price: price,
      amount: amount,
    };

    cartCtx.addToCart(cartItem);
  };

  return (
    <div className={classes.productData}>
      <div className={classes.dataContainer}>
        <div>
          <h2>{title}</h2>
          <div className={classes.ratingContainer}>
            <p className={classes.ratingCount}>({rating.count}) avaliações</p>
            <div className={classes.starsArray}>
              {starsArray.map((index) => (
                <Star key={index} isActive={index <= rating.rate}></Star>
              ))}
            </div>
          </div>
          <p className={classes.productDescription}>{description}</p>
        </div>
        <div className={classes.orderDataContainer}>
          <div className={classes.priceAndQuantity}>
            <h3 className={classes.orderPrice}>R$ {sellPrice}</h3>
            <QuantitySetter
              onQuantityChange={onQuantityChange}
            ></QuantitySetter>
          </div>
          <div className={classes.orderActions}>
            <CartButton
              addToCart={addToCartHandler}
              quantity={productQuantity}
            ></CartButton>
            <BuyButton
            addToCart={addToCartHandler}
            quantity={productQuantity}></BuyButton>
          </div>
        </div>
      </div>
      <ProductImage image={product.image}></ProductImage>
    </div>
  );
};

export default ProductData;
