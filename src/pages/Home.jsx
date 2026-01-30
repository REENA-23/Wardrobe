import Navbar from "../home-pages/Navbar";
import Footer from "../home-pages/Footer";
import TopOfferBar from "../home-pages/TopOfferBar";
import Hero from "../home-pages/Hero";
import Shop from "../home-pages/Shop";
import New from "../home-pages/New";
import Slider from "../home-pages/Slider";
import Best from "../home-pages/Best";
import Collect from "../home-pages/Collect";
import Top from "../home-pages/Top";
import Wear from "../home-pages/Wear";

export default function Home() {
  return (
    <>
    <Navbar/>
    <TopOfferBar/>
    <Hero/>
    <Shop/>
    <New/>
    <Slider/>
    <Best/>
    <Collect/>
    <Top/>
    <Wear/>
    <Footer/>
  
  </>
  );
}
