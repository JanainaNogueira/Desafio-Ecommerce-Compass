import { ProductsContext } from "../../context/products-context";
import { useEffect, useContext, useState } from "react";
import CardProduct from "../CardProduct";
import Styles from "./index.module.css";
function SectionProduct() {
  const [productIdBegin, setProductIdBegin] = useState(0);
  const { availableProducts, fetchProducts } = useContext(ProductsContext);
  let card = [];
  for (let id = productIdBegin; id < productIdBegin + 8; id++) {
    card.push(
      availableProducts[id] && (
        <CardProduct key={id} product={availableProducts[id]} />
      )
    );
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  function setForward() {
    if (productIdBegin + 8 > availableProducts.length) {
      setProductIdBegin(0);
    } else {
      setProductIdBegin(productIdBegin + 8);
    }
  }
  function setBackward() {
    if (productIdBegin === 0) {
      setProductIdBegin(
        availableProducts.length - (availableProducts.length % 8)
      );
    } else {
      setProductIdBegin(productIdBegin - 8);
    }
  }

  return (
    <section className={Styles.sectionProduct}>
      <div className={Styles.sectionProduct__title}>
        <p>Ofertas terminando em breve</p>
        <p>Produtos em destaque mais recentes adicionados</p>
      </div>
      <div className={Styles.boxProduct}>{card}</div>
      <div className={Styles.switchCards}>
        <button
          className={Styles.switchCards__left}
          onClick={() => setBackward()}
        ></button>
        <button
          className={Styles.switchCards__right}
          onClick={() => setForward()}
        ></button>
      </div>
    </section>
  );
}
export default SectionProduct;