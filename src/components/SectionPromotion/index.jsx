import { ProductsContext } from '../../context/products-context'
import {useEffect, useContext} from 'react'
import ProductSale from '../ProductSale'
import Styles from './index.module.css'
function SectionProduct(){
    const { availableProducts, fetchProducts } = useContext(ProductsContext);
    useEffect(()=>{
        fetchProducts()
    })
    return(
        <section className={Styles.sectionPromotion}>
            <div className={Styles.sectionPromotion__title}>
            <p>Ofertas terminando em breve</p>
            </div>
            <div className={Styles.sectionPromotion__cards}>
            <ProductSale key={1} product={availableProducts[9]}/>
            <ProductSale key={2} product={availableProducts[2]}/>
            </div>
        </section>
    )
}

export default SectionProduct