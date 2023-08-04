import ArrowBottom from "./ArrowBottom";
import MainHeading from "./MainHeading";
import SliderContent from "./SliderContent";

const Slider = () => {
  return (
    <div className="relative h-full md:h-4/5 md:mt-20">
      <SliderContent />
      <MainHeading />
      <ArrowBottom />
    </div>
  );
};

export default Slider;
