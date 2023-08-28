import Styles from './index.module.css'
import ButtonSale from '../ButtonSale'
import FavoriteButton from '../FavoriteButton'
import Star from '../Star'
import BoxTimer from '../BoxTimer'
import Flag from '../FlagDiscountNew'
import { useState } from 'react'
//import FlagDiscountNew from '../FlagDiscountNew'
// eslint-disable-next-line react/prop-types
const CardProduct = ({product,statusFlag, newPricePromotion})=>{
    // eslint-disable-next-line react/prop-types
    const{title,price,image,description,rating}=product||{};
    const starsArray = [0, 1, 2, 3, 4];
    const[newStatusFlag,setNewStatusFlag]=useState(false)
    return(
        <article className={Styles.card}>
            <div className={Styles.cardDescription}>
                <div className={Styles.description}>
                    <p className={Styles.titleProduct}>{title}</p>
                    <p className={Styles.descriptionProduct}>{description}</p>
                    <div className={Styles.starsArray}>
                        {starsArray.map((index) => (
                            <Star key={index} isActive={rating?index <= rating.rate:{}}></Star>
                        ))}
                        <p className={Styles.rating}>({rating?rating.rate:'none'})</p>
                    </div>
                    <div className={Styles.promotionalPrice}>
                        <p>de {price?price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): price}</p>
                        <p>por {price?(price-(price*0.25)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):'R$'+price}</p>
                    </div>
                </div>
                <BoxTimer/>
                <div className={Styles.buttons}>
                    <FavoriteButton/>
                    <ButtonSale product={product} newPricePromotion={true}/>
                </div>
            </div>
            <div className={Styles.imgCard}>
            <Flag statusFlag={newStatusFlag}/>
                <img className={Styles.imgCard__img} src={image}/>
            </div>
            
        </article>
    )
}

export default CardProduct;