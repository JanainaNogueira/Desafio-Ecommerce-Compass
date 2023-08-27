/* eslint-disable react/prop-types */
import classes from './index.module.css'

function OrderSummary ({ totalPrice }) {
    return(
        <div className={classes.mainDiv}>
            <p className={classes.titleSummary}>
                Resumo do pedido
            </p>
            <div className={classes.totalOrder}>
                <p>{(totalPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <p>Total</p>
            </div>
            <div className={classes.couponDiv}>
                <p>
                    Possui um código de desconto?
                </p>
                <div>
                    <label htmlFor="cupom">CUPOM</label>
                    <input
                        id="cupom"
                        type="cupom"
                        name="cupom"
                        value="Código de desconto"
                    />
                </div>
            </div>
            <p className={classes.line}></p>
            <button className={classes.buyButton}><p>Comprar</p></button>

        </div>
    );
}

export default OrderSummary;