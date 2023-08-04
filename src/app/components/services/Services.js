"use client";
import ServiceContent from "./ServiceContent";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

function Services() {
  const [content, setContent] = useState("فهم احتياجات العميل");
  const steps = [
    { content: "فهم احتياجات العميل", step: 1 },
    { content: "تحضير المنتج وتحديده", step: 2 },
    { content: "بناء علاقات مع العملاء", step: 3 },
    { content: "تقديم خدمات ما بعد البيع", step: 4 },
    { content: "عمل موقع ويب لتقديم الخدمات", step: 5 },
  ];
  function handleClick(e, id) {
    steps.forEach((step) => {
      const stepsArray = Array.from(
        e.currentTarget.parentElement.parentElement.children
      );
      stepsArray.forEach((son) => {
        if ([...son.children][0].classList.contains("active"))
          [...son.children][0].classList.remove("active");
      });
      e.target.classList.add("active");
      if (step.step === id) setContent(step.content);
    });
  }
  return (
    <div id="services" className="mt-20">
      <h2 className="section-heading">خدماتنا</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container relative m-auto border-red-400 border-2 rounded-full w-[330px] h-[330px] md:w-[500px] md:h-[500px]"
      >
        <div className="icon">
          <div>
            {steps.map((step) => (
              <div>
                <button
                  className={`step step-${step.step} ${step.step === 1 ? "active" : ""}`}
                  onClick={(e) => handleClick(e, step.step)}
                >
                  {step.step}
                </button>
              </div>
            ))}
          </div>
          <ServiceContent content={content} />
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
