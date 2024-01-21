import React from "react";
import stepImg1 from "../../assets/icon/steps (1).png";
import stepImg2 from "../../assets/icon/steps (2).png";
import stepImg3 from "../../assets/icon/steps (3).png";
import stepImg4 from "../../assets/icon/steps (4).png";

const steps = [
  { imgSrc: stepImg1, text: "Fastest Delivery" },
  { imgSrc: stepImg2, text: "Fresh Grocery" },
  { imgSrc: stepImg3, text: "Easy Payment" },
  { imgSrc: stepImg4, text: "24/7 Support" },
];

const ProcessingSteps = () => {
  return (
    <section>
      <div className="container mt-16 lg:mt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6 items-center w-full lg:w-5/6 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-primary-50/30 lg:bg-white rounded p-3 lg:p-0 block text-center lg:flex items-center justify-center lg:gap-1 xl:gap-3 ${index !== steps.length - 1 && "lg:border-r"}`}
            >
              <img src={step.imgSrc} className="mix-blend-multiply max-[1023px]:mx-auto max-[1023px]:block" alt={`processImg${index + 1}`} />
              <p className="font-medium text-base">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessingSteps;
