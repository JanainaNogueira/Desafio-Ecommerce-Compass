import classes from './index.module.css'
import mastercard from '../../_assets/img/mc.png'
import visa from '../../_assets/img/visa.png'
import paypal from '../../_assets/img/paypal.png'
const BottomFooter = ()=>{
return(
<div className={classes.bottomBar}>
    <div className={classes.payMethods}>
        <div className={classes.imgContainer}>
            <img className={classes.payImage} src={paypal} alt="" /> 
        </div>
        <div className={classes.imgContainer}>
            <img className={classes.payImage} src={mastercard} alt="" />
        </div>
        <div className={classes.imgContainer}>
            <img className={classes.payImage} src={visa} alt="" />
        </div>
    </div>
</div>)
}

export default BottomFooter