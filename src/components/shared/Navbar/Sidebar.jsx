import React, { useState } from "react";
import { RiHeartLine, RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import AuthenticationModal from "../AuthenticationModal";
import ActiveLink from "../../theme/ActiveLink";

const Sidebar = ({ visible, handleCloseSidebar }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  const handleCloseModal = (e) => {
    if (e.target.id === "container") handleCloseSidebar();
  };

  if (!visible) {
    return null;
  }

  return (
    <div id="container" onClick={handleCloseModal} className="lg:hidden z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-start">
      <div className="relative w-2/4">
        <div className="bg-white w-full h-screen p-[12px] md:p-6">
          <div className="w-full flex justify-between pt-8 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-6 md:gap-8">
              <button onClick={() => setShowModal(true)}>
                <RiUser3Line className="text-[20px] text-black" />
              </button>{" "}
              <Link onClick={handleCloseSidebar} to="/wishlist">
                <button className="relative flex items-center" type="button">
                  <RiHeartLine className="text-[20px] text-black" />
                  <span className="absolute top-[-10px] left-[18px] text-[14px] font-semibold text-primary-600">{0}</span>
                </button>
              </Link>
            </div>
            <button className="bg-secondary-500 text-white w-6 md:w-8 h-6 md:h-8 rounded-full text-sm" onClick={handleCloseSidebar}>
              X
            </button>
          </div>
          <ul className="flex flex-col items-start gap-6 pt-6 text-black text-sm lg:text-base">
            <SidebarLink to="/" onClick={handleCloseSidebar}>
              Home
            </SidebarLink>
            <SidebarLink to="/categories" onClick={handleCloseSidebar}>
              Shop
            </SidebarLink>
            <SidebarLink to="/blog" onClick={handleCloseSidebar}>
              Blog
            </SidebarLink>
            <SidebarLink to="/about" onClick={handleCloseSidebar}>
              About us
            </SidebarLink>
            <SidebarLink to="/contact" onClick={handleCloseSidebar}>
              Contact us
            </SidebarLink>
          </ul>
        </div>
      </div>
      <AuthenticationModal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

const SidebarLink = ({ to, onClick, children }) => (
  <li onClick={onClick} className="txtHover active font-semibold">
    <ActiveLink to={to}>{children}</ActiveLink>
  </li>
);

export default Sidebar;
