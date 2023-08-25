import Styles from './index.module.css'
import imgCard from '../../assets/img/Image.png'
import AddCartButton from '../CartButton'
import FavoriteButton from '../FavoriteButton'
const CardProduct = ()=>{
    return(
        <article className={Styles.card}>
            <div className={Styles.cardDescription}>
                <div className={Styles.description}>
                    <p className={Styles.titleProduct}>Novo relógio inteligente da série 8</p>
                    <p className={Styles.descriptionProduct}>Black Sport Band- Regular.</p>
                    <p>estrelas</p>
                    <div className={Styles.promotionalPrice}>
                        <p>por R$780,00</p>
                    </div>
                    <div className={Styles.contador}>
                        <div>
                            <p>02</p>
                            <p>Dias</p>
                        </div>
                        <div>
                            <p>23</p>
                            <p>Horas</p>
                        </div>
                        <div>
                            <p>16</p>
                            <p>Minutos</p>
                        </div>
                        <div>
                            <p>02</p>
                            <p>Segundos</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.buttons}>
                    <FavoriteButton/>
                    <AddCartButton/>
                </div>
            </div>
            <img className={Styles.imgCard} src={imgCard}/>
        </article>
    )
}

export default CardProduct;