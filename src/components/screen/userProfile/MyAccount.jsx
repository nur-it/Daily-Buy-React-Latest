import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

const MyAccount = () => {
  const [active, setActive] = useState(false);

  const initialData = {
    firstName: "sabbir",
    lastName: "ahmed",
    email: "sabbirahmed@gmail.com",
    mobile: "0186******",
    address: "Kashimpur, Faridpur, Dhaka, Bangladesh",
    country: "Bangladesh",
    state: "Dhaka",
    city: "Faridpur",
  };

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleEditClick = () => {
    setActive(true);
  };

  const handleCancelClick = () => {
    setFormData(initialData); // Reset form data to initial values
    setActive(false);
  };

  const handleSaveClick = () => {
    // Add logic to save changes to the backend if needed
    setActive(false);
  };

  return (
    <div className="container">
      <div className="border rounded-[10px] mt-[26px]">
        <div className="px-5 pt-5 pb-3 flex items-center justify-between border-b">
          <p className="font-semibold text-sm lg:text-lg">
            Account Information
          </p>
          {!active ? (
            <button
              onClick={handleEditClick}
              className="flex items-center gap-1 text-[#999999]"
            >
              <FiEdit />
              <span>Edit</span>
            </button>
          ) : (
            <div className="flex gap-2 md:gap-5">
              <button
                onClick={handleCancelClick}
                className="text-sm md:text-lg py-[5px] px-3 md:px-6 border rounded-[5px] text-gray-500 hover:bg-gray-50 duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                className="text-sm md:text-lg py-[5px] px-3 md:px-6 rounded-[5px] bg-primary-600 hover:bg-primary-500 duration-300 text-white"
              >
                Save
              </button>
            </div>
          )}
        </div>
        <form className="p-5 w-full lg:w-3/4">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px]">
            <div>
              <label className="block text-gray-400" htmlFor="firstName">
                First Name
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.firstName}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="firstName"
                  autofocus="autofocus"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              )}
            </div>
            <div>
              <label className="block text-gray-400" htmlFor="lastName">
                Last Name
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.lastName}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px] mt-[24px]">
            <div>
              <label className="block text-gray-400" htmlFor="emailAddress">
                Email Address
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.email}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="email"
                  id="emailAddress"
                  autofocus="autofocus"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              )}
            </div>
            <div>
              <label className="block text-gray-400" htmlFor="mobile">
                Mobile Number
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.mobile}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px] mt-[24px]">
            <div>
              <label className="block text-gray-400" htmlFor="address">
                Address Line
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.address}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              )}
            </div>
            <div>
              <label className="block text-gray-400" htmlFor="country">
                Country
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.country}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px] mt-[24px]">
            <div>
              <label className="block text-gray-400" htmlFor="state">
                Select at district, state of province
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.state}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              )}
            </div>
            <div>
              <label className="block text-gray-400" htmlFor="city">
                City/Area
              </label>
              {!active && (
                <p className="font-semibold mt-[5px] capitalize">
                  {formData.city}
                </p>
              )}
              {active && (
                <input
                  className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
