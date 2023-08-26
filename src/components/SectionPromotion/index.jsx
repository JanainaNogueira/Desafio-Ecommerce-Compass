import ProductSale from '../ProductSale'
import Styles from './index.module.css'
function SectionProduct(){
    return(
        <section className={Styles.sectionPromotion}>
            <div className={Styles.sectionPromotion__title}>
            <p>Ofertas terminando em breve</p>
            </div>
            <div className={Styles.sectionPromotion__cards}>
                <ProductSale/>
                <ProductSale/>
            </div>
        </section>
    )
}

export default SectionProduct