import Styles from './index.module.css'
import AddCartButton from '../CartButton'
import FavoriteButton from '../FavoriteButton'
import Flag from '../FlagDiscountNew'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const CardProduct = ({product, statusFlag})=>{
    const navigate =useNavigate()
    const{id,title,price,image}=product||{};
    const[newStatusFlag,setNewStatusFlag]=useState(true)
    const[newPrice, setNewPrice]=useState(0)
    const switchStatusFlag =()=>{
    if(id%2==0){
        if(id%3==0){
            setNewStatusFlag(null)
            setNewPrice(price)   
        }else{
            setNewStatusFlag(true)
        setNewPrice(price)
        }
    }else {
        setNewStatusFlag(false)
        setNewPrice(price-(price*0.25))
        if(id%3==0){
            setNewStatusFlag(null)
            setNewPrice(price)   
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
        <article className={Styles.card} onClick={redirectToItem}>
            {newStatusFlag!=null?<Flag statusFlag={newStatusFlag}/>:<></>}
            <img className={Styles.imgCard} src={image}/>
            <div className={Styles.cardDescription}>
                <div className={Styles.description}>
                    <p>{title}</p>
                    <div className={Styles.prices}>
                    {newStatusFlag==true || newStatusFlag==null? <></>
                    :
                    <p className={Styles.oldPrice}>de {price?price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): price}</p>}
                    <p className={newStatusFlag==true || newStatusFlag==null?Styles.price:Styles.newPrice}>{newStatusFlag==true || newStatusFlag==null?<></>:'por'}{newPrice?newPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}): newPrice}</p>
                    </div>
                </div>
                <div className={Styles.buttons}>
                    <FavoriteButton/>
                    <AddCartButton product={product}/>
                </div>
            </div>
        </article>
    )
}

export default CardProduct;