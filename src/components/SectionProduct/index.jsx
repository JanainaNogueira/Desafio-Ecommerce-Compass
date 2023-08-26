import { ProductsContext } from "../../context/products-context";
import { useEffect,useContext} from "react";
import CardProduct from '../CardProduct'
import Styles from './index.module.css'
function SectionProduct(){
    const { availableProducts, fetchProducts } = useContext(ProductsContext);
    let card=[];
    for(let id=0;id<8;id++){
        card.push(<CardProduct key={id} product={availableProducts[id]}/>)
    }
    useEffect(() => {
        fetchProducts()
    },[]);
    
        return(
            <section className={Styles.sectionProduct}>
                <div className={Styles.sectionProduct__title}>
                    <p>Ofertas terminando em breve</p>
                    <p>Produtos em destaque mais recentes adicionados</p>
                </div>
                <div className={Styles.boxProduct}>
                    {card}
                </div>
                <div className={Styles.switchCards}>
                    <button className={Styles.switchCards__left} ></button>
                    <button className={Styles.switchCards__right} ></button>
                </div>
            </section>
        )   
}
export default SectionProduct