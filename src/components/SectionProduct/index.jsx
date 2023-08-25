import CardProduct from '../CardProduct'
import Styles from './index.module.css'
function SectionProduct(){
    return(
        <section className={Styles.sectionProduct}>
            <div className={Styles.sectionProduct__title}>
            <p>Ofertas terminando em breve</p>
            <p>Produtos em destaque mais recentes adicionados</p>
            </div>
            <div className={Styles.boxProduct}>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>

        </section>
    )
}

export default SectionProduct