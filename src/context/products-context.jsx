/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
  fetchProducts: () => {},
  searchProduct: () => {},
});

const ProductsContextProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return setAvailableProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProduct = (products, id) => {
    return products.find((prd) => prd.id === id);
    
  };

  return (
    <ProductsContext.Provider
      value={{ availableProducts, fetchProducts, searchProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
