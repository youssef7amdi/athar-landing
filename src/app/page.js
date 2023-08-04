import Header from "./components/heading/Header";
import Offer from "./components/offer/Offer";
import Services2 from "./components/AnotherServices/Services2";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";
import MobileList from "./components/heading/MobileList";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Offer />
      <Services />
      <Services2 />
      <Register />
      <Footer />
      <MobileList />
    </div>
  );
}
