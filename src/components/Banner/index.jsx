import Styles from './index.module.css'

function Banner(){
    return(
        <article className={Styles.banner}>
            <button className={Styles.arrowLefth}></button>
            <div className={Styles.bannerText}>
                <h2>Macbook PRO M2</h2>
                <p>Velocidade e performance</p>
                <button className={Styles.buyButton}>
                    <p>Confira</p>
                </button>
            </div>
            <button className={Styles.arrowRight}></button>
        </article>
    )
}

export default Banner