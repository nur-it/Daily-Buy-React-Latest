import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../redux/feature/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, main_img_url, price, del_price, cartQuantity } = item;

  const total = price * cartQuantity;

  const handleRemoveItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleQuantityChange = (cartItem, quantityChange) => {
    dispatch(quantityChange(cartItem));
  };

  return (
    <div className="flex justify-between lg:grid grid-cols-7 items-center lg:m-[7px] bg-white">
      <div className="flex items-center lg:col-span-3">
        <div className="p-2">
          <div className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] bg-gray-50  rounded-2xl">
            <img
              src={main_img_url}
              className="w-full h-full object-center object-fill"
              alt="product-img"
            />
          </div>
        </div>
        <div className="hidden lg:block w-2/3">{name}</div>
      </div>

      <div className="flex flex-col lg:mx-auto text-[12px] md:text-base">
        <h2 className="lg:hidden">{name.slice(0, 16)}...</h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
          <p className="text-primary-600 lg:text-gray-600 font-semibold">
            ${price}.00
          </p>
          <p className="text-gray-600 lg:hidden">
            <del>${del_price}.00</del>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={() => handleQuantityChange(item, decreaseCart)}
          type="button"
          className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 text-xs md:text-base lg:text-xl font-medium border border-primary-600 lg:border-0 bg-gray-50 rounded-[50%] text-primary-600 lg:text-black transition hover:opacity-75"
        >
          &minus;
        </button>

        <span className="px-2 lg:px-4 lg:text-base font-medium">
          {cartQuantity}
        </span>

        <button
          onClick={() => handleQuantityChange(item, addToCart)}
          type="button"
          className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 text-xs md:text-base lg:text-xl font-medium border border-primary-600 lg:border-0 bg-gray-50 rounded-[50%] text-primary-600 lg:text-black transition hover:opacity-75"
        >
          &#43;
        </button>
      </div>

      <h2 className="font-semibold text-primary-600 hidden lg:block mx-auto">
        ${total.toFixed(2)}
      </h2>

      <button
        onClick={() => handleRemoveItem(item)}
        className="lg:mx-auto p-2 lg:p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 lg:w-6 h-4 lg:h-6 inline-block text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
