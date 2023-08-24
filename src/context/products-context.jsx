/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
  fetchProducts: () => {},
  searchProduct: () => {},
  selectedProduct: {"id":null,"title":"","price":0.00,"description":"Product not found!","category":"","image":"","rating":{"rate":0,"count":0}}
});

const ProductsContextProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({})


  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return setAvailableProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProduct = async (id) => {

    const response = await fetch( `https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    return setSelectedProduct(data)
  };

  return (
    <ProductsContext.Provider
      value={{ availableProducts, fetchProducts, searchProduct, selectedProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
