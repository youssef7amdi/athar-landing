"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SliderContent() {
  return (
    <div className="w-full h-full absolute top-0 left-0 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-primary before:z-10 before:opacity-80">
      <Carousel
        additionalTransfrom={0}
        ssr={true}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="w-full h-full object-cover"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl={false}
        minimumTouchDrag={80}
        pauseOnHover={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={true}
        rewindWithAnimation={true}
        rtl={true}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Image
          className="w-full h-full object-cover"
          src={`/images/athar-them_01.png`}
          width={400}
          height={400}
          alt="Error"
        ></Image>
        <Image
          className="w-full h-full object-cover"
          src={`/images/athar-them_02.png`}
          width={400}
          height={400}
          alt="Error"
        ></Image>
        <Image
          className="w-full h-full object-cover"
          src={`/images/athar-them_03.png`}
          width={400}
          height={400}
          alt="Error"
        ></Image>
      </Carousel>
    </div>
  );
}

export default SliderContent;

/*
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

  // const [sliderRef] = useKeenSlider(
  //   {
  //     loop: true,
  //   },
  //   [
  //     (slider) => {
  //       let timeout;
  //       // let mouseOver = false;
  //       function clearNextTimeout() {
  //         clearTimeout(timeout);
  //       }
  //       function nextTimeout() {
  //         // clearTimeout(timeout);
  //         // if (mouseOver) return;
  //         timeout = setTimeout(() => {
  //           slider.next();
  //         }, 2000);
  //       }
  //       slider.on("dragStarted", clearNextTimeout);
  //       slider.on("animationEnded", nextTimeout);
  //       slider.on("updated", nextTimeout);
  //     },
  //   ]
  // );

    // <div  ref={sliderRef} className="keen-slider w-full h-4/5 absolute top-0 left-0 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-primary before:z-10 before:opacity-60">
    //   <Image
    //   className="keen-slider__slide max-w-full"
    //     src={`/images/athar-them_01.png`}
    //     width={400}
    //     height={400}
    //     alt="Error"
    //   ></Image>
    //   <Image
    //   className="keen-slider__slide max-w-full"
    //     src={`/images/athar-them_02.png`}
    //     width={400}
    //     height={400}
    //     alt="Error"
    //   ></Image>
    //   <Image
    //   className="keen-slider__slide max-width-full"
    //     src={`/images/athar-them_03.png`}
    //     width={400}
    //     height={400}
    //     alt="Error"
    //   ></Image>
    // </div>
*/
