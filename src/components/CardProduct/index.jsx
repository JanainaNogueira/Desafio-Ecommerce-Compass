import Styles from './index.module.css'
import imgCard from '../../assets/img/Image.png'
import AddCartButton from '../CartButton'
import FavoriteButton from '../FavoriteButton'
const CardProduct = ()=>{
    return(
        <article className={Styles.card}>
            <img className={Styles.imgCard} src={imgCard}/>
            <div className={Styles.cardDescription}>
                <div className={Styles.description}>
                    <p>Relogio TOP</p>
                    <p>R$250</p>
                </div>
                <div className={Styles.buttons}>
                    <FavoriteButton/>
                    <AddCartButton/>
                </div>
            </div>
        </article>
    )
}

export default CardProduct;