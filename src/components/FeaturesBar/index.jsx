import FeatureCard from "../FeatureCard"
import classes from './index.module.css'
import truck from '../../assets/img/Features Icons.svg'

const FeaturesBar = ()=>{
    const creditCard = <svg xmlns="http://www.w3.org/2000/svg" width="41" height="35" viewBox="0 0 41 35" fill="none">
    <path d="M35.9792 0.3125H11.6042C9.01947 0.3125 6.91666 2.41531 6.91666 5C6.91666 5.86297 7.61619 6.5625 8.47916 6.5625C9.34212 6.5625 10.0417 5.86297 10.0417 5C10.0417 4.13844 10.7426 3.4375 11.6042 3.4375H35.9792C36.8407 3.4375 37.5417 4.13844 37.5417 5V20.625C37.5417 21.4866 36.8407 22.1875 35.9792 22.1875H34.4167V14.375C34.4167 11.7903 32.3138 9.6875 29.7292 9.6875H5.35416C2.76947 9.6875 0.666656 11.7903 0.666656 14.375V30C0.666656 32.5847 2.76947 34.6875 5.35416 34.6875H29.7292C32.3138 34.6875 34.4167 32.5847 34.4167 30V25.3125H35.9792C38.5638 25.3125 40.6667 23.2097 40.6667 20.625V5C40.6667 2.41531 38.5638 0.3125 35.9792 0.3125ZM31.2917 30C31.2917 30.8616 30.5907 31.5625 29.7292 31.5625H5.35416C4.49259 31.5625 3.79166 30.8616 3.79166 30V14.375C3.79166 13.5134 4.49259 12.8125 5.35416 12.8125H29.7292C30.5907 12.8125 31.2917 13.5134 31.2917 14.375V15.9375H8.47916C7.61619 15.9375 6.91666 16.637 6.91666 17.5C6.91666 18.363 7.61619 19.0625 8.47916 19.0625H31.2917V30Z" fill="#62D0B6"/>
    <path d="M26.6042 28.4375H20.3542C19.4912 28.4375 18.7917 27.738 18.7917 26.875C18.7917 26.012 19.4912 25.3125 20.3542 25.3125H26.6042C27.4671 25.3125 28.1667 26.012 28.1667 26.875C28.1667 27.738 27.4671 28.4375 26.6042 28.4375Z" fill="#62D0B6"/>
    </svg>

    const update = <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
    <path d="M26.5833 9.5625H14.0833C11.4987 9.5625 9.39584 11.6653 9.39584 14.25V26.75C9.39584 29.3347 11.4987 31.4375 14.0833 31.4375H26.5833C29.168 31.4375 31.2708 29.3347 31.2708 26.75V14.25C31.2708 11.6653 29.168 9.5625 26.5833 9.5625ZM28.1458 26.75C28.1458 27.6116 27.4449 28.3125 26.5833 28.3125H14.0833C13.2218 28.3125 12.5208 27.6116 12.5208 26.75V14.25C12.5208 13.3884 13.2218 12.6875 14.0833 12.6875H18.7708V17.375C18.7708 18.238 19.4704 18.9375 20.3333 18.9375C21.1963 18.9375 21.8958 18.238 21.8958 17.375V12.6875H26.5833C27.4449 12.6875 28.1458 13.3884 28.1458 14.25V26.75Z" fill="#62D0B6"/>
    <path d="M35.9583 3.3125C35.0954 3.3125 34.3958 4.01203 34.3958 4.875V5.88805C33.1021 4.67664 31.6395 3.63961 30.0514 2.81562C27.1315 1.30078 23.7709 0.5 20.3333 0.5C9.11834 0.5 0.333344 9.28508 0.333344 20.5C0.333344 21.6347 0.427797 22.7731 0.614125 23.8836C0.742328 24.6471 1.40389 25.1878 2.15327 25.1877C2.23912 25.1877 2.32616 25.1806 2.41366 25.1659C3.26475 25.0231 3.83881 24.2175 3.69608 23.3664C3.53827 22.4264 3.45834 21.462 3.45834 20.5C3.45834 11.0373 10.8708 3.625 20.3333 3.625C26.3213 3.625 31.5422 6.31203 34.6572 10.997C35.0387 11.5708 35.7508 11.8268 36.4102 11.6277C37.0696 11.4284 37.5208 10.8208 37.5208 10.1319V4.875C37.5208 4.01203 36.8213 3.3125 35.9583 3.3125Z" fill="#62D0B6"/>
    <path d="M20.3333 40.5C16.8958 40.5 13.5352 39.6992 10.6153 38.1843C9.02717 37.3603 7.56459 36.3234 6.27084 35.112V36.125C6.27084 36.988 5.57131 37.6875 4.70834 37.6875C3.84537 37.6875 3.14584 36.988 3.14584 36.125V30.8681C3.14584 30.1792 3.59702 29.5716 4.25647 29.3723C4.91577 29.1732 5.62803 29.4292 6.00944 30.003C9.12452 34.688 14.3454 37.375 20.3333 37.375C29.7959 37.375 37.2083 29.9627 37.2083 20.5C37.2083 19.5381 37.1284 18.5736 36.9706 17.6336C36.8279 16.7825 37.4019 15.9769 38.253 15.8341C39.1044 15.6912 39.9098 16.2654 40.0526 17.1165C40.2389 18.2269 40.3333 19.3653 40.3333 20.5C40.3333 31.7149 31.5483 40.5 20.3333 40.5Z" fill="#62D0B6"/>
  </svg>

    const truckIcon = <img src={truck} alt="" />

  

    return(
        <div className={classes.featureBar}>
            <FeatureCard title='Comprou' description='Aceitamos todos os cartões' image={creditCard}/>
            <FeatureCard title='Atualizou' description='Aprovação de conta' image={update} />
            <FeatureCard title='Entrega' description='Entregamos pra todo Brasil' image={truckIcon} />
        </div>
    )
}

export default FeaturesBar