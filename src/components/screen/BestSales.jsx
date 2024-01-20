import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const BestSales = () => {
  const [productData, setProductData] = useState([]);
  const [visible, setVisible] = useState(8);
  const fetchData = () => {
    axios
      .get("/products.json")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const showLessItem = () => {
    setVisible((prevValue) => prevValue - 4);
  };

  return (
    <>
      <div className=" mt-8 lg:mt-16 container">
        <div className="flex justify-between items-center mt-[25px] md:mt-[35px] lg:mt-[50px] mb-[16px] lg:mb-[29px]">
          <h2 id="recommended" className="text-sm md:text-2xl lg:text-4xl font-semibold text-center lg:text-left text-[#2E2E2E]">
            Recommended for you
          </h2>
          <Link to="/categories" className="text-gray-500 text-[10px] md:text-base uppercase flex items-center gap-1 hover:text-primary-600 duration-300">
            <span>View More</span>
            <FiArrowRight />
          </Link>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] md:gap-[20px]">
            {productData.slice(0, visible).map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
          {visible < 9 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={showMoreItem}
                className="px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out  inline-flex items-center gap-1"
              >
                <span>Show More</span>
                <FiChevronDown className="text-xl" />
              </button>
            </div>
          )}
          {visible === productData.length && (
            <div className="mt-12 flex justify-center">
              <a href="#recommended">
                <button
                  onClick={showLessItem}
                  className="px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out  inline-flex items-center gap-1"
                >
                  <span>Show Less</span>
                  <BiChevronUp className="text-xl" />
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BestSales;
