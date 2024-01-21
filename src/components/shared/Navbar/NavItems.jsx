import React from "react";
import ActiveLink from "../../theme/ActiveLink";

const NavItems = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8 py-3 text-black">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/categories">Shop</NavItem>
        <NavItem to="/blog">Blog</NavItem>
        <NavItem to="/about">About us</NavItem>
        <NavItem to="/contact">Contact us</NavItem>
        <div className="relative group">
          <button className="flex items-center px-3 py-2 font-medium text-gray-700 hover:text-primary-600 focus:outline-none">
            <span>Pages</span>
            <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z" />
            </svg>
          </button>
          <ul className="absolute left-0 mt-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block !z-10">
            <NavItem to="/invoice">Invoice</NavItem>
            <NavItem to="/profile">Account</NavItem>
            <NavItem to="/faq">FAQ</NavItem>
            <NavItem to="/aboutV2">About Version 2</NavItem>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <li>
    <ActiveLink to={to}>{children}</ActiveLink>
  </li>
);

export default NavItems;
