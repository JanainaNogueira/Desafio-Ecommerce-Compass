import Styles from './index.module.css'
import imgProduct from '../../assets/img/lap 1.png'
function BannerEnd(){
    return(
        <article className={Styles.banner}>
            <img src={imgProduct} className={Styles.imgProduct}/>
            <div className={Styles.bannerText}>
                <h2>Home Office</h2>
                <p>A loja de cestos oferece-lhe todos os artigos de eletrónica ou 
                    artigos de decoração de que necessita, para além dos melhores
                    descontos em produtos. Compre agora e aproveite todos os 
                    descontos nos produtos.</p>
                <button className={Styles.buyButton}>
                    <p>Confira</p>
                </button>
            </div>
        </article>
    )
}

export default BannerEnd