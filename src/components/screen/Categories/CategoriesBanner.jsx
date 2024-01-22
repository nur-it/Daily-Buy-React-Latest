import React from "react";
import categoryBanner from "../../../assets/hero/category_banner.png";

const CategoriesBanner = () => {
  const bannerContent = {
    imageSrc: categoryBanner,
    title: ["20% Off Fresh", "organic fruits"],
    description: "An online marketplace that specializes in organic food",
  };

  return (
    <div className="bg-primary-50 hidden lg:grid grid-cols-2 items-center rounded-lg">
      <div className="">
        <img src={bannerContent.imageSrc} alt="Categories Banner" />
      </div>
      <div>
        {bannerContent.title.map((title, index) => (
          <h2 key={index} className="text-6xl text-primary-700 font-bold">
            {title}
          </h2>
        ))}
        <p className="text-gray-700 mt-3">{bannerContent.description}</p>
      </div>
    </div>
  );
};

export default CategoriesBanner;
