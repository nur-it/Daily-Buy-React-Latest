import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { HiOutlineChartBar } from "react-icons/hi";
import ProductCard from "../../shared/ProductCard";

const CategoriesProduct = () => {
  const [productData, setProductData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("New Arrivals");

  const fetchData = () => {
    axios
      .get("products.json")
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

  const sortOptions = [
    { label: "New Arrivals", value: "New Arrivals" },
    { label: "Top Rated", value: "Top Rated" },
    { label: "New Selling", value: "New Selling" },
  ];

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const renderProductCards = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[10px] lg:gap-[11px] mt-8">
        {productData.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    );
  };

  const renderSortDropdown = () => (
    <div className="flex text-gray-600 text-sm">
      <p>Sort By :</p>
      <select name="sort" id="sort" value={selectedSort} onChange={handleSortChange} className="bg-transparent focus:outline-none px-3 font-semibold text-black">
        {sortOptions.map((option, idx) => (
          <option key={idx} value={option.value} className="p-3">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  const renderFilterButton = () => (
    <div className="grid grid-cols-2 text-[16px] lg:hidden">
      <button className="flex font-medium items-center gap-1 justify-center py-3 w-full border-r focus:text-primary-600 text-xl">
        <CiFilter className="focus:text-primary-600 text-2xl" />
        <span className="">Filter</span>
      </button>
      <button className="flex font-medium items-center justify-center gap-1 py-3 w-full focus:text-primary-600 text-xl">
        <HiOutlineChartBar className="focus:text-primary-600 text-2xl" />
        <span className="">Sort</span>
      </button>
    </div>
  );

  return (
    <>
      <div className="mt-8 lg:mt-16">
        <div className="hidden lg:flex justify-between items-center">
          <p>
            <small className="space-x-0 lg:space-x-4">
              <span>
                <b> Showing 1 - 20</b>
              </span>
              <br className="lg:hidden" />
              <span>out of 356 Products</span>
            </small>
          </p>
          {renderSortDropdown()}
        </div>
        {renderFilterButton()}
        {renderProductCards()}
      </div>
    </>
  );
};

export default CategoriesProduct;
