import classes from './index.module.css'

const FeatureCard = ({description,image,title})=>{
    return (
    <div className={classes.featureCard}>
        <div className={classes.featureText}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className={classes.featureImage}>{image}</div>
    </div>
    )
}

export default FeatureCard