import classes from './index.module.css'

function OrderSummary () {
    return(
        <div className={classes.mainDiv}>
            <p className={classes.titleSummary}>
                Resumo do pedido
            </p>
            <div className={classes.totalOrder}>
                <p>R$ 6.400,00</p>
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
            <button className={classes.buyButton}>Comprar</button>

        </div>
    );
}

export default OrderSummary;