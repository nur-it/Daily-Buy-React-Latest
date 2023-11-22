import React from "react";
import ActiveLink from "../../theme/ActiveLink";

const NavItems = () => {
    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 py-3 text-black">
                <li>
                    <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li>
                    <ActiveLink to="/categories">Shop</ActiveLink>
                </li>
                <li>
                    {" "}
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </li>
                <li>
                    {" "}
                    <ActiveLink to="/about">About us</ActiveLink>
                </li>
                <li>
                    {" "}
                    <ActiveLink to="/contact">Contact us</ActiveLink>
                </li>
                <div className="relative group">
                    <button
                        className="flex items-center px-3 py-2 font-medium text-gray-700 hover:text-primary-600 focus:outline-none">
                        <span>pages</span>
                        <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                            <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z"/>
                        </svg>
                    </button>
                    <ul
                        className="absolute left-0 mt-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block">
                         
                          <li
                            className="block px-4 py-2">
                              <ActiveLink to="/invoice">Invoice</ActiveLink>
                          </li>
                          <li
                            className="block px-4 py-2">
                              <ActiveLink to="/profile">Account</ActiveLink>
                          </li>
                          <li
                            className="block px-4 py-2">
                              <ActiveLink to="/faq">FAQ</ActiveLink>
                          </li>
                          <li
                            className="block px-4 py-2">
                              <ActiveLink to="/aboutV2">About Version 2</ActiveLink>
                          </li>
                    </ul>
                </div>
            </ul>
        </nav>
    );
};

export default NavItems;
