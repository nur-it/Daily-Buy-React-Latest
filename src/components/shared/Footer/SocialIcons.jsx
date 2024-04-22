// SocialIcons.js
import React from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({ socialIcons }) => {
  return (
    <div className="flex items-center space-x-4">
      {socialIcons.map((icon, index) => (
        <Link
          key={index}
          to="/#"
          className="w-[42px] h-[42px] bg-[#E0F6F2] hover:bg-primary-100 duration-300 transition ease-in-out rounded-[50%] inline-flex items-center justify-center"
        >
          <img src={icon} className="cursor-pointer" alt="social-icon" />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
