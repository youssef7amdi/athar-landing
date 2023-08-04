"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function Offer() {
  return (
    <div id="offer" className="">
      <h2 className="section-heading">العروض</h2>
      <main className="px-20">
        <motion.div className="container m-auto flex flex-col lg:flex-row justify-center items-center gap-16 xl:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="w-[300px] h-[200] sm:w-[450px] sm:h-[300px] sm:flex-shrink-0 shadow shadow-xl shadow-red-200 relative z-20 sm:before:absolute sm:before:bg-primary sm:before:z-[-1] sm:before:w-48 sm:before:h-48 sm:before:top-[-15%] sm:before:left-[-10%]"
          >
            <ReactPlayer
              light={
                <Image
                  className="w-full h-full object-cover"
                  width={300}
                  height={200}
                  src="/images/athar-them_02.png"
                  alt="Error"
                />
              }
              playing={true}
              controls
              className="w-full h-full relative"
              width="100%"
              height="100%"
              url={"/video.mp4"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-xl leading-relaxed md:leading-relaxed md:text-3xl text-center xl:text-right"
          >
            تابع هذا الفيديو لمعرفة عرضنا وما نقدمه لعملائنا من خدمات لتحقيق
            مبيعات في أقل من 90 يوم
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default Offer;
