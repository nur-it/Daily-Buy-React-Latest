import React from "react";
import { Link } from "react-router-dom";
import "../../styles/poster.css";
import { PrimaryButton } from "../theme/Button";

const PosterOffer = () => {
  const offer1 = {
    title: "Breakfast & Dairy",
    discount: "Weekend discount upto 40%",
    bgClass: "group_bg3", // Add the class for the background image
  };

  const offer2 = {
    title: "Milk & Coffee",
    discount: "Weekend discount upto 40%",
    bgClass: "group_bg4", // Add the class for the background image
  };

  const renderOffer = (offer) => {
    return (
      <div className={`${offer.bgClass} py-[52px] bg-cover bg-center`}>
        <div className="grid grid-cols-2 items-center h-full">
          <div></div>
          <div>
            <div className="space-y-2 text-black/75">
              <h2 className="font-bold text-[20px] md:text-[20px] lg:text-[40px]">{offer.title}</h2>
              <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[14px]">{offer.discount}</p>
            </div>
            <div className="mt-5">
              <Link to="/categories">
                <PrimaryButton title="SHOP NOW" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="container mt-8 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {renderOffer(offer1)}
          {renderOffer(offer2)}
        </div>
      </div>
    </section>
  );
};

export default PosterOffer;
