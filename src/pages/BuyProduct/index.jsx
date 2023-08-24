import { useContext } from "react";
import ProductData from "../../components/ProductData";
import classes from "./index.module.css";
import { ProductsContext } from "../../context/products-context";
const BuyProduct = () => {
  const { availableProducts } = useContext(ProductsContext);

  const foundProduct = availableProducts.find((prd) => prd.id === 12);

  return (
    <>
      <div className={classes.productContainer}>
        <ProductData product={foundProduct}></ProductData>
      </div>
    </>
  );
};
export default BuyProduct;
