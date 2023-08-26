import Styles from './index.module.css'
import AddCartButton from '../CartButton'
import FavoriteButton from '../FavoriteButton'
// eslint-disable-next-line react/prop-types
const CardProduct = ({product})=>{
    // eslint-disable-next-line react/prop-types
    const{title,price,image}=product||{};
    return(
        <article className={Styles.card}>
            <img className={Styles.imgCard} src={image}/>
            <div className={Styles.cardDescription}>
                <div className={Styles.description}>
                    <p>{title}</p>
                    <p>{price?price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): price}</p>
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