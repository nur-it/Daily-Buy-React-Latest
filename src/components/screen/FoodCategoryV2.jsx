import React from "react";
import fruitsAndVegetable from "../../assets/icon/foodCategoryPrimaryIcon.png";
import MeatsFish from "../../assets/icon/foodCategoryPrimaryIcon (2).png";
import BreadsBakery from "../../assets/icon/foodCategoryPrimaryIcon (3).png";
import BreakfastDairy from "../../assets/icon/foodCategoryPrimaryIcon (4).png";
import FrozenFoods from "../../assets/icon/foodCategoryPrimaryIcon (5).png";
const FoodCategoryV2 = () => {
  return (
    <div className="lg:container flex flex-wrap justify-center xl:justify-between gap-8 md:gap-12 xl:gap-24 mt-[65px]">
      <div className="cursor-pointer group text-center flex flex-col items-center justify-center">
        <div className=" w-[80px] xl:w-[130px] h-[80px] xl:h-[130px] flex items-center justify-center rounded-full bg-primary-50">
          <img className="w-[50px] xl:w-[75px]" src={fruitsAndVegetable} alt="" />
        </div>
        <h2 className=" text-[12px] md:text-[16px] xl:text-[20px] mt-[24px] group-hover:underline duration-300 transition-all">Fruits & Vegetable</h2>
        <p className=" text-[10px] md:text-[12px] lg:text-[16px] text-gray-500 group-hover:underline duration-300 transition-all">6 Items</p>
      </div>
      <div className=" cursor-pointer group text-center flex flex-col items-center justify-center">
        <div className=" w-[80px] xl:w-[130px] h-[80px] xl:h-[130px] flex items-center justify-center rounded-full bg-primary-50">
          <img className="w-[50px] xl:w-[75px]" src={MeatsFish} alt="" />
        </div>
        <h2 className=" text-[12px] md:text-[16px] xl:text-[20px] mt-[24px]  group-hover:underline duration-300 transition-all">Meats & Fish</h2>
        <p className=" text-[10px] md:text-[12px] lg:text-[16px] text-gray-500  group-hover:underline duration-300 transition-all">6 Items</p>
      </div>
      <div className=" cursor-pointer group text-center flex flex-col items-center justify-center">
        <div className=" w-[80px] xl:w-[130px] h-[80px] xl:h-[130px] flex items-center justify-center rounded-full bg-primary-50">
          <img className="w-[50px] xl:w-[75px]" src={BreadsBakery} alt="" />
        </div>
        <h2 className=" text-[12px] md:text-[16px] xl:text-[20px] mt-[24px]  group-hover:underline duration-300 transition-all">Breads & Bakery</h2>
        <p className=" text-[10px] md:text-[12px] lg:text-[16px] text-gray-500  group-hover:underline duration-300 transition-all">6 Items</p>
      </div>
      <div className=" cursor-pointer group text-center flex flex-col items-center justify-center">
        <div className=" w-[80px] xl:w-[130px] h-[80px] xl:h-[130px] flex items-center justify-center rounded-full bg-primary-50">
          <img className="w-[50px] xl:w-[75px]" src={BreakfastDairy} alt="" />
        </div>
        <h2 className=" text-[12px] md:text-[16px] xl:text-[20px] mt-[24px]  group-hover:underline duration-300 transition-all">Breakfast & Dairy</h2>
        <p className=" text-[10px] md:text-[12px] lg:text-[16px] text-gray-500  group-hover:underline duration-300 transition-all">6 Items</p>
      </div>
      <div className=" cursor-pointer group text-center flex flex-col items-center justify-center">
        <div className=" w-[80px] xl:w-[130px] h-[80px] xl:h-[130px] flex items-center justify-center rounded-full bg-primary-50">
          <img className="w-[50px] xl:w-[75px]" src={FrozenFoods} alt="" />
        </div>
        <h2 className=" text-[12px] md:text-[16px] xl:text-[20px] mt-[24px]  group-hover:underline duration-300 transition-all">Frozen Foods</h2>
        <p className=" text-[10px] md:text-[12px] lg:text-[16px] text-gray-500  group-hover:underline duration-300 transition-all">6 Items</p>
      </div>
    </div>
  );
};

export default FoodCategoryV2;
