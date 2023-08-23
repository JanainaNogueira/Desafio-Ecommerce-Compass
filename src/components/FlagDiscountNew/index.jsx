import classes from './index.module.css'
import { useState } from 'react';

function FlagDiscountNew () {
    const [isNew, setIsNew] = useState(true);
    
    return (
        

        <div className={classes.card}>
            <div className={`${classes.flagText} ${isNew ? classes.new : classes.discount}`}>
                <p>
                    {isNew ? 'Novo' : '25% OFF'}
                </p>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.250001 0.803848L0.250001 11.1962L7 6Z" fill="#F55157"/>
                </svg>
            </div>
            
        </div>
    );
}

export default FlagDiscountNew;