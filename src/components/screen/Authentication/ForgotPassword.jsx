import React, { useState } from "react";
import "../../../styles/SignSignUp.css"; // Import local CSS file for styling
import { FullWidthButton } from "../../theme/Button";
import { Link } from "react-router-dom";

const ForgotPassword = ({ setPath, onClose }) => {
  const [newPassword, setNewPassword] = useState(false);

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // Implement logic to handle email submission or password reset actions here
    console.log("Form submitted!");
  };

  return (
    <div className="forgot-password-container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[70vh] w-full">
        <div className="bgImg w-[400px] lg:w-[430px] h-[70vh] hidden md:block"></div>
        <div className="form-container p-3 w-full">
          <h2 className="text-2xl font-semibold text-center mb-10">
            {newPassword ? "New Password" : "Forgot Password"}
          </h2>
          <form onSubmit={handleFormSubmission} className="space-y-5">
            {!newPassword && (
              <div className="text-center">
                <input
                  required
                  className="input-field px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border"
                  type="email"
                  placeholder="Email"
                />
              </div>
            )}

            {newPassword && (
              <>
                <div className="text-center">
                  <input
                    required
                    className="input-field px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <input
                    required
                    className="input-field px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              </>
            )}

            <div className="text-center pb-10">
              {newPassword ? (
                <Link to="/profile" onClick={onClose}>
                  <FullWidthButton title="Reset Password" />
                </Link>
              ) : (
                <FullWidthButton
                  onClick={() => setNewPassword(true)}
                  title="Forget Password"
                />
              )}
              <div className="mt-8">
                <span>Already have an account?</span>
                <button
                  onClick={() => setPath("signIn")}
                  className="text-primary-600 font-semibold hover:underline"
                >
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
