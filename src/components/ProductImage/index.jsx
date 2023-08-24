/* eslint-disable react/prop-types */
import ZoomButton from "../ZoomButton"
import classes from "./index.module.css"

const ProductImage = ({image})=>{
return(
    <div className={classes.imageContainer}>
        <img src={image} className={classes.productImage} alt="" />
        <ZoomButton></ZoomButton>
    </div>
)
}

export default ProductImage