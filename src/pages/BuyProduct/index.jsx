/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import ProductData from "../../components/ProductData";
import classes from "./index.module.css";
import { ProductsContext } from "../../context/products-context";
import Header from "../../components/header";
import Footer from "../../components/Footer/";
import { useParams } from "react-router-dom";
const BuyProduct = () => {
  const { selectedProduct, searchProduct } = useContext(ProductsContext);

  const params = useParams();

  const id = params.productId;
  useEffect(() => {
    searchProduct(id);
  }, [id]);

  let keys = Object.keys(selectedProduct).length;
  return (
    <>
      <Header />
      <div className={classes.productContainer}>
        {keys > 0 && <ProductData product={selectedProduct}></ProductData>}
      </div>
      <Footer />
    </>
  );
};
export default BuyProduct;
