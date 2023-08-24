import { useContext, useEffect } from "react";
import ProductData from "../../components/ProductData";
import classes from "./index.module.css";
import { ProductsContext } from "../../context/products-context";

const BuyProduct = () => {
  const { selectedProduct,searchProduct } = useContext(ProductsContext);

  
  const id = 15
  useEffect(()=>{
    searchProduct(id)
  },[])



let keys = Object.keys(selectedProduct).length
  return (
    <>
      <div className={classes.productContainer}>
        {keys > 0 && <ProductData product={selectedProduct}></ProductData>}
      </div>
    </>
  );
};
export default BuyProduct;
