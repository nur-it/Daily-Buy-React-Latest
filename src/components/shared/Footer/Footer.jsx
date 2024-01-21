import React from "react";
import logo from "../../../assets/logo/big_logo.png";
import payment from "../../../assets/icon/payment.png";
import contactIcon from "../../../assets/icon/contact_icon.png";
import social1 from "../../../assets/icon/facebook.svg";
import social2 from "../../../assets/icon/linkedIn.svg";
import social3 from "../../../assets/icon/tweeter.svg";
import social4 from "../../../assets/icon/instagram.svg";

import SocialIcons from "./SocialIcons";
import NavigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactSection = {
    description: "We'd love to hear from you! If you have any questions or concerns, please don't hesitate to contact us.",
    question: "Have any question?",
    phoneNumber: "099 456 789",
  };

  const socialIcons = [social1, social2, social3, social4];

  const quickLinks = [
    { path: "/home", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About us" },
    { path: "/contact", label: "Contact us" },
  ];

  const customerAreaLinks = [
    { path: "/account", label: "My Account" },
    { path: "/order", label: "Order" },
    { path: "/terms", label: "Terms" },
    { path: "/policy", label: "Privacy Policy" },
    { path: "/sipping", label: "Shipping Information" },
  ];

  return (
    <div className="border-t border-gray-100 footer">
      <div className="my-16 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-8">
          <div className="max-w-[193px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <p className="max-w-[354px] text-[#454F5B] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <SocialIcons socialIcons={socialIcons} />
        </div>

        <NavigationLinks title="QUICK LINKS" links={quickLinks} />

        <NavigationLinks title="CUSTOMER AREA" links={customerAreaLinks} />

        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">CONTACT</h2>
          <p className="py-3 text-gray-600">{contactSection.description}</p>
          <div className="p-3 flex space-x-3 items-center">
            <img src={contactIcon} alt="" />
            <div>
              <p className="text-black font-medium">{contactSection.question}</p>
              <a href={`tel:${contactSection.phoneNumber}`} className="inline-block text-primary-600 font-bold text-xl sm:text-2xl md:text-3xl">
                {contactSection.phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col xl:flex-row justify-between items-center container py-2">
        <p className="text-gray-500">DailyBuy - © 2023 All Rights Reserved</p>
        <div className="flex items-center my-2 lg:my-0">
          <p className="text-primary-600 hidden md:block font-semibold">Pay With</p> <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
