import React from "react";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="hidden bg-white lg:block">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Left section */}
          <ul className="flex items-center text-xs">
            <NavItem to="/orders/1sdfgfsf1454">Order Tracking</NavItem>
            <NavItem to="/profile">My Account</NavItem>
          </ul>

          {/* Center section */}
          <div className="flex items-center gap-1 text-xs">
            <p>
              Summer sale discount off{" "}
              <span className="text-secondary-600">50%</span>!
            </p>
            <Link
              className="hover:text-primary-600 duration-300"
              to="/categories"
            >
              Shop Now
            </Link>
          </div>

          {/* Right section */}
          <ul className="flex items-center text-xs">
            <NavItem to="/faq">FAQ</NavItem>
            <li>
              <span className="mr-1">Need help? Call Us:</span>
              <span className="text-primary-600">+1400 800</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, children }) => (
  <li className="txtHover border-r pr-3">
    <Link to={to}>
      <span>{children}</span>
    </Link>
  </li>
);

export default NavTop;
