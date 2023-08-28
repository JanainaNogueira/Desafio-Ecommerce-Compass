import Header from '../../components/header'
import Banner from '../../components/Banner'
import FeaturesBar from '../../components/FeaturesBar'
import SectionPromotion from '../../components/SectionPromotion'
import SectionProduct from '../../components/SectionProduct'
import BannerEnd from '../../components/BannerEnd'
import Footer from '../../components/Footer'
function Home(){
    return(
        <>
        <Header/>
        <Banner/>
        <FeaturesBar/>
        <SectionPromotion/>
        <SectionProduct/>
        <BannerEnd/>
        <Footer/>
        </>
    )
}

export default Home