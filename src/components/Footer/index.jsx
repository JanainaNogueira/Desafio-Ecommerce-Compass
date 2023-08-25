import TopFooter from '../TopFooter/index'
import BottomFooter from '../BottomFooter/index'
import classes from './index.module.css'

const Footer = ()=>{
    return <footer className={classes.footer}>
        <TopFooter></TopFooter>
        <BottomFooter></BottomFooter>
    </footer>

}
export default Footer