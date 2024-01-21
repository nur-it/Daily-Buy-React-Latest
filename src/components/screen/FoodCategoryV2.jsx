import React from "react";
import fruitsAndVegetable from "../../assets/icon/foodCategoryPrimaryIcon.png";
import MeatsFish from "../../assets/icon/foodCategoryPrimaryIcon (2).png";
import BreadsBakery from "../../assets/icon/foodCategoryPrimaryIcon (3).png";
import BreakfastDairy from "../../assets/icon/foodCategoryPrimaryIcon (4).png";
import FrozenFoods from "../../assets/icon/foodCategoryPrimaryIcon (5).png";
import Grocery from "../../assets/icon/foodCategoryPrimaryIcon (6).png";

const categories = [
  { name: "Fruits & Vegetable", imgSrc: fruitsAndVegetable },
  { name: "Meats & Fish", imgSrc: MeatsFish },
  { name: "Breads & Bakery", imgSrc: BreadsBakery },
  { name: "Breakfast & Dairy", imgSrc: BreakfastDairy },
  { name: "Frozen Foods", imgSrc: FrozenFoods },
  { name: "Grocery", imgSrc: Grocery },
];

const FoodCategoryV2 = () => {
  return (
    <section>
      <div className="lg:container grid grid-cols-2 min-[425px]:grid-cols-3  min-[850px]:flex flex-wrap justify-center xl:justify-between gap-8 md:gap-12 xl:gap-24 mt-[65px]">
        {categories.map((category, index) => (
          <div key={index} className={`cursor-pointer group text-center flex flex-col items-center justify-center ${index === categories.length - 1 && "block min-[850px]:hidden"}`}>
            <div className="w-[80px] xl:w-[130px] h-[80px] xl:h-[130px] flex items-center justify-center rounded-full bg-primary-50 overflow-hidden p-4 xl:p-8">
              <img className="w-full h-full object-center" src={category.imgSrc} alt={`${category.name} Icon`} />
            </div>
            <h2 className="text-[12px] md:text-[16px] xl:text-[20px] mt-[24px] group-hover:underline decoration-primary-500 duration-300 transition-all">{category.name}</h2>
            <p className="text-[10px] md:text-[12px] lg:text-[16px] text-gray-500 group-hover:underline decoration-primary-500 duration-300 transition-all">6 Items</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategoryV2;
