"use client";
import { motion } from "framer-motion";

function Services2() {
  const steps = [
    { content: "فهم احتياجات العميل", step: 1 },
    { content: "تحضير المنتج وتحديده", step: 2 },
    { content: "بناء علاقات مع العملاء", step: 3 },
    { content: "تقديم خدمات ما بعد البيع", step: 4 },
    { content: "عمل موقع ويب لتقديم الخدمات", step: 5 },
  ];
  return (
    <div className="px-16 py-24">
      <h2 className="section-heading">خدماتنا 2</h2>
      <div className="services-container relative flex flex-wrap gap-8 items-center justify-center">
        {steps.map((step) => (
          <motion.div
            initial={{ opacity: 0, y: "1rem" }}
            whileInView={{ opacity: 1, y: "0.5rem" }}
            transition={{ duration: 0.2, delay: 0.1 * step.step }}
            className="w-[230px] mt-6 lg:mt-0 lg:w-1/6 h-[150px] rounded-md border-2 border-black-100"
          >
            <div className="p-4 w-full h-full rounded-md relative shadow-lg transition-all duration-300 flex justify-center items-center transform hover:translate-y-[-0.5rem] hover:shadow-2xl hover:border-red-400 group">
              <span className="group-hover:bg-red-400 group-hover:text-white step-number transition duration-300 absolute w-[60px] h-[60px] rounded-full bg-white text-primary border border-4 border-white outline outline-2 outline-primary flex justify-center items-center text-2xl font-bold top-0 right-[50%] transform translate-x-1/2 translate-y-[-50%]">
                {step.step}
              </span>
              <p className="group-hover:drop-shadow-2xl text-center leading-relaxed drop-shadow-xl font-bold text-lg">
                {step.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services2;
