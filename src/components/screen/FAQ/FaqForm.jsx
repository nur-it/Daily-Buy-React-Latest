import React, { useState } from "react";
import { FullWidthButton } from "../../theme/Button";

const FaqForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission with formData
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="w-full bg-white md:p-6 ">
        <h2 className="text-xl md:text-xl lg:text-3xl font-bold mb-8 lg:text-center">
          Have any questions
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
          action=""
        >
          <div className="flex flex-col lg:flex-row items-center gap-[32px]">
            <input
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <textarea
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <FullWidthButton title="Submit Now" />
        </form>
      </div>
    </div>
  );
};

export default FaqForm;
