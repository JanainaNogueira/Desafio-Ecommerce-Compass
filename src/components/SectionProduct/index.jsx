import CardProduct from '../CardProduct'
import Styles from './index.module.css'
function SectionProduct(){
    return(
        <section className={Styles.sectionProduct}>
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