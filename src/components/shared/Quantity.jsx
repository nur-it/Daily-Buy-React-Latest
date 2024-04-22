import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart } from "../../redux/feature/cartSlice";

const Quantity = ({ item, productInfo }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartItem = cartItems.find((cart) => cart._id !== item);

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  return (
    <>
      <div className="flex items-center space-x-4 ">
        <label htmlFor="Quantity" className="hidden lg:block">
          {" "}
          Quantity:
        </label>

        <div className="flex items-center lg:border border-gray-50 p-1 rounded-lg">
          <button
            onClick={() => handleDecreaseCart(productInfo)}
            type="button"
            className="w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] lg:border-0 border-primary-600 text-xl bg-gray-50 rounded-full text-primary-600 lg:text-gray-600 transition hover:opacity-75 hover:bg-gray-200"
          >
            &minus;
          </button>

          <span className="px-6 font-semibold">
            {cartItem ? cartItem?.cartQuantity : 0}
          </span>

          <button
            onClick={() => handleIncreaseCart(productInfo)}
            type="button"
            className="w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] lg:border-0 border-primary-600 text-xl bg-gray-50 rounded-full text-primary-600 lg:text-gray-600 transition hover:opacity-75 hover:bg-gray-200"
          >
            &#43;
          </button>
        </div>
      </div>
    </>
  );
};

export default Quantity;
