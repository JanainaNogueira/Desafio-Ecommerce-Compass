import classes from './index.module.css'

// eslint-disable-next-line react/prop-types
const FeatureCard = ({description,image,title})=>{
    return (
    <div className={classes.featureCard}>
        <div className={classes.featureText}>
            <h1 className={classes.featureTitle}>{title}</h1>
            <p className={classes.featureDescription}>{description}</p>
        </div>
        <div className={classes.featureImage}>{image}</div>
    </div>
    )
}

export default FeatureCard