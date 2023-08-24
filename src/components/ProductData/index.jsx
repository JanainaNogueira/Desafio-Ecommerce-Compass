/* eslint-disable react/prop-types */
import CartButton from "../CartButtonAlternate";
import BuyButton from "../BuyButton";
import Star from "../Star";
import classes from "./index.module.css";
import ProductImage from "../ProductImage";
import QuantitySetter from "../QuantitySetter";
import { useState } from "react";

const ProductData = ({ product }) => {

  if(Object.keys(product).length > 0){
  const { title, price, description, rating } = product;
  const starsArray = [0, 1, 2, 3, 4];

  const [sellPrice, setSellPrice] = useState(price);

  const onQuantityChange = (quantity) => {
    setSellPrice(price * quantity);
  };

  return (
    <div className={classes.productData}>
      <div className={classes.dataContainer}>
        <div>
          <h2>{title}</h2>
          <div className={classes.ratingContainer}>
            <p className={classes.ratingCount}>({rating.count}) avaliações</p>
            <div>
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
            <CartButton></CartButton>
            <BuyButton></BuyButton>
          </div>
        </div>
      </div>
      <ProductImage image={product.image}></ProductImage>
    </div>
  );}else{
    return <h1>Not found</h1>
  }
};

export default ProductData;
