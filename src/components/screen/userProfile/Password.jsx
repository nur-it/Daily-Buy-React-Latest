import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!oldPassword || !password || !confirmPassword) {
      setNotification("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setNotification("Not matched your password.");
      return;
    }
    setNotification("Password changed successfully!");
    setTimeout(() => {
      window.location.reload();
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="container mt-5 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="border rounded-[10px] p-5 md:px-20 md:py-10 w-full lg:w-1/2"
      >
        <input
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
          type="password"
          name="oldPassword"
          id="oldPassword"
          placeholder="Old password"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full mt-[15px]"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full mt-[15px]"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
        />
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-500 duration-300 rounded-[5px] py-[16px] text-white mt-[15px]"
        >
          Change Password
        </button>
        {notification && (
          <p className="text-secondary-500 mt-3">{notification}</p>
        )}
      </form>
    </div>
  );
};

export default Password;
