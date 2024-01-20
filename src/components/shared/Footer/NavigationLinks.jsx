// NavigationLinks.js
import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = ({ links, title }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mt-3 mb-5">{title}</h2>
      <ul className="space-y-4 py-3">
        {links.map((link, index) => (
          <li key={index} className="txtHover">
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;
