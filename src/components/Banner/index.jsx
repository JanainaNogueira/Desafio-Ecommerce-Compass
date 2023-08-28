import Styles from './index.module.css'

function Banner(){
    return(
        <article className={Styles.banner}>
            <button className={Styles.arrowLefth}><svg width="8" height="12" viewBox="0 0 8 12" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
            <path id="Vector" d="M6.64087 12.0002C6.46436 12.0002 6.28785 11.9322 6.15207 11.7961L0.870334 6.50352C0.748134 6.38107 0.666668 6.20419 0.666668 6.01371C0.666668 5.83684 0.734557 5.61915 0.870334 5.4967L6.15207 0.204085C6.42363 -0.0680284 6.85811 -0.0680284 7.12967 0.204085C7.40122 0.476199 7.40122 0.911581 7.12967 1.18369L2.30957 6.00011L7.12967 10.8301C7.40122 11.1022 7.40122 11.5376 7.12967 11.8097C6.99389 11.9322 6.81738 12.0002 6.64087 12.0002Z" fill="#666666"/>
            </g>
            </svg>
            </button>
            <div className={Styles.bannerText}>
                <h2>Macbook PRO M2</h2>
                <p>Velocidade e performance</p>
                <button className={Styles.buyButton}>
                    <p>Confira</p>
                </button>
            </div>
            <button className={Styles.arrowRight}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.35913 14C5.18262 14 5.00611 13.932 4.87033 13.7961C4.59878 13.5243 4.59878 13.0895 4.87033 12.8177L9.69043 7.99321L4.87033 3.18233C4.59878 2.91053 4.59878 2.47565 4.87033 2.20385C5.14189 1.93205 5.57637 1.93205 5.84793 2.20385L11.1297 7.49037C11.2519 7.61268 11.3333 7.78935 11.3333 7.97961C11.3333 8.15629 11.2654 8.37373 11.1297 8.49604L5.84793 13.7961C5.71215 13.932 5.53564 14 5.35913 14Z" fill="#666666"/>
            </svg>

            </button>
        </article>
    )
}

export default Banner