
import imgCart from '../../assets/img/cart 1.svg'
import imgLogo from '../../assets/img/logo.svg'
import imgLupa from '../../assets/img/Search.svg'
import imgUser from '../../assets/img/user 1.png'

import Styles from './index.module.css'

function Header(){
    return(
        <header>
            <div className={Styles.header__cart}>
                <img src={imgCart}/>
                <div className={Styles.header__message}>
                    <p>Bem-vindo</p>
                    <p> Welliton</p>
                </div>
                <img src={imgUser}/>
            </div>
            <div className={Styles.header__search}>
                <img src={imgLupa}/>
                <p>Buscar</p>
            </div>
            <div className={Styles.header__logo}>
                <img src={imgLogo}/>
            </div>
        </header>
    )
}

export default Header;