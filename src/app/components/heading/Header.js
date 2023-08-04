import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className="header h-[480px] mb-20 md:mb-0 sm:h-[600px] md:h-screen relative">
      <Navbar />
      <Slider />
    </div>
  );
};

export default Header;
