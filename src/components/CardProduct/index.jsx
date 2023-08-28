import Styles from './index.module.css'
import AddCartButton from '../CartButton'
import FavoriteButton from '../FavoriteButton'
import Flag from '../FlagDiscountNew'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const CardProduct = ({product, statusFlag, newPricePromotion})=>{
    const navigate =useNavigate()
    const{id,title,price,image}=product||{};
    const[newStatusFlag,setNewStatusFlag]=useState(true)
    const[newPrice, setNewPrice]=useState(false)
    const switchStatusFlag =()=>{
    if(id%2==0){
        if(id%3==0){
            setNewStatusFlag(null)
            setNewPrice(false)
        }else{
            setNewStatusFlag(true)
            setNewPrice(false)
        }
    }else {
        setNewStatusFlag(false)
        setNewPrice(true)
        if(id%3==0){
            setNewStatusFlag(null)
            setNewPrice(false)   
        }
    }
    }
    const redirectToItem=()=>{
        navigate('/products/'+id)
    }
    useEffect(()=>{
        switchStatusFlag()
    },[])
    return(
        <article className={Styles.card}>
            {newStatusFlag!=null?<Flag statusFlag={newStatusFlag}/>:<></>}
            <img onClick={redirectToItem} className={Styles.imgCard} src={image}/>
            <div className={Styles.cardDescription}>
                <div className={Styles.description}>
                    <p>{title}</p>
                    <div className={Styles.prices}>
                    {newStatusFlag==true || newStatusFlag==null? <></>
                    :
                    <p className={Styles.oldPrice}>de {price?price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): price}</p>}
                    <p className={newStatusFlag==true || newStatusFlag==null?Styles.price:Styles.newPrice}>{newStatusFlag==true || newStatusFlag==null?<></>:'por'}{price?(price*0.75).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):'R$'+price}</p>
                    </div>
                </div>
                <div className={Styles.buttons}>
                    <FavoriteButton/>
                    <AddCartButton product={product} newPricePromotion={newPrice}/>
                </div>
            </div>
        </article>
    )
}

export default CardProduct;