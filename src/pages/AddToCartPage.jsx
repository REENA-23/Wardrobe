import Navbar from "../home-pages/Navbar";
import TopOfferBar from "../home-pages/TopOfferBar";
import AddToCart from "../add-pages/AddToCart";
import FollowUs from "../add-pages/FollowUs";
import Similar from "../add-pages/Similar";
import Recent from "../add-pages/Recent";
import RatingReview from "../add-pages/RatingReview";
import Footer from "../home-pages/Footer";

export default function AddToCartPage() {
  return (
    <>
      <Navbar />
      <TopOfferBar />
     <AddToCart/>
     <FollowUs/>
     <Similar/>
     <Recent/>
     <RatingReview/>
     <Footer/>
    </>
  );
}
