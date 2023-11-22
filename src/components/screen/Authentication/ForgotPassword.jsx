import React, { useState } from "react";
import "../../../styles/SignSignUp.css";
import { FullWidthButton } from "../../theme/Button";
import { Link } from "react-router-dom";
const ForgotPassword = ({ setPath, onClose }) => {
  const [newPassword, setNewPassword] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[70vh] w-full">
        <div className="w-[400px] lg:w-[430px] h-[70vh] hidden md:block bgImg"></div>
        <div className="p-3 w-full">
          <h2 className="text-2xl font-semibold text-center mb-10">{newPassword ? "New Password" : "Forget Password"}</h2>
          <form onSubmit={(e) => e.preventDefault()} action="#" className="space-y-5">
            {!newPassword && (
              <div className="text-center">
                <input
                  required={true}
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border"
                  type="email"
                  placeholder="Email"
                />
              </div>
            )}

            {newPassword && (
              <div className="text-center">
                <input
                  required={true}
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Password"
                />
              </div>
            )}

            {newPassword && (
              <div className=" text-center">
                <input
                  required={true}
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            )}

            <div className="text-center pb-10">
              {newPassword ? (
                <Link to="/profile" onClick={onClose}>
                  <FullWidthButton title="Reset Password"></FullWidthButton>
                </Link>
              ) : (
                <FullWidthButton setNewPassword={setNewPassword} title="Forget Password" />
              )}
              <div className="mt-8">
                <span>Already have account?</span>{" "}
                <button onClick={() => setPath("signIn")} className="text-primary-600 font-semibold hover:underline">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
