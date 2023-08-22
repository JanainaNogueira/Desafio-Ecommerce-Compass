import classes from "./index.module.css";
import mastercard from "../../_assets/img/mc.png";
import visa from "../../_assets/img/visa.png";
import paypal from "../../_assets/img/paypal.png";
const BottomFooter = () => {
  return (
    <div className={classes.bottomBar}>
      <div className={classes.payMethods}>
        <img className={classes.payImage} src={paypal} alt="" />

        <img className={classes.payImage} src={mastercard} alt="" />
        <img className={classes.payImage} src={visa} alt="" />
      </div>
      <div className={classes.textContainer}>
        <p className={classes.bottomText}>2023 © Todos os direitos reservados </p>
      </div>
    </div>
  );
};

export default BottomFooter;
