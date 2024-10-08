import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { addToCart } from "../../redux/feature/cartSlice";
import { SecondaryButton } from "../theme/Button";

const ProductCard = ({ product }) => {
  // Hooks and state initialization
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();

  // Function to handle adding the product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Destructuring product details
  const {
    _id,
    nickname,
    price,
    discount,
    main_img_url,
    del_price,
    rating,
    stock,
  } = product;

  // Function to navigate to the product details page
  const handleProductDetails = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className="hover:shadow-custom rounded-lg px-3 lg:py-8 py-3 w-full bg-white duration-300 transition ease-in border  overflow-hidden relative cursor-pointer border-gray-100/50">
      <div>
        {/* Wishlist icon */}
        <div
          onClick={() => setWishlist(!wishlist)}
          className="bg-white hidden md:inline-block p-2 border border-gray-100 rounded-[50%] text-white absolute top-2 right-3 hover:scale-110 duration-300 transition"
        >
          {!wishlist && (
            <AiOutlineHeart className="text-[#999999]/40 text-3xl" />
          )}
          {wishlist && <AiFillHeart className="text-[#FF5555] text-3xl" />}
        </div>

        {/* Discount tag */}
        <div className="bg-secondary-300 mt-[2px] text-white text-[8px] md:text-[14px] font-semibold inline-block p-[4px] lg:px-[12px] lg:py-[6px] rounded-tl-[8px] lg:rounded-tl-[10px] rounded-br-[8px] lg:rounded-br-[10px] absolute top-3 left-3">
          <p>{discount}% OFF</p>
        </div>

        {/* Product image */}
        <div
          onClick={() => handleProductDetails(_id)}
          className="sm:w-[267px] sm:h-[267px]  mx-auto"
        >
          <img
            src={main_img_url}
            className="w-full h-full object-center object-fill"
            alt=""
          />
        </div>

        {/* Product details */}
        <div
          onClick={() => handleProductDetails(_id)}
          className="space-y-3 lg:mt-1"
        >
          <h3 className="text-black font-semibold text-[12px] md:text-[18px]">
            {nickname}
          </h3>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-1 md:gap-3">
              <span className="text-primary-600 text-[12px] md:text-[18px] font-semibold">
                ${price}
              </span>
              <span className="text-gray-500 text-[10px] md:text-[18px]">
                <del>${del_price}</del>
              </span>
            </p>
            <div className="flex gap-1 items-center">
              {/* Star ratings */}
              <ReactStars
                className="block md:hidden"
                count={5}
                size={8}
                value={rating}
                edit={false}
              ></ReactStars>
              <ReactStars
                className="hidden md:block"
                count={5}
                size={20}
                value={rating}
                edit={false}
              ></ReactStars>
              <p className="text-gray-500 text-[12px] md:text-[18px]">
                ({rating})
              </p>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <div className="mt-3">
          <SecondaryButton
            stock={stock}
            handleAddToCart={handleAddToCart}
            product={product}
            title="Add to cart"
            w="full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
