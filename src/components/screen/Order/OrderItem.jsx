import React from "react";
import productImg from "../../../assets/products/product (1).png";

const OrderItem = () => {
  const product = {
    name: "Healthy Cashew Nuts",
    price: 5.0,
    quantity: 3,
    total: 15.0,
    image: productImg,
  };

  return (
    <div className="w-full pt-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[14px] font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase">
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-gray-700">
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={product.image}
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p className="font-semibold text-black">{product.name}</p>
                    <p className="text-xs text-gray-600">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold">
                {product.quantity}
              </td>
              <td className="px-4 py-3 text-ms font-semibold">
                ${product.total.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-xs">
                <button className="px-2 py-1 font-semibold leading-tight text-primary-600 bg-primary-100 rounded-sm">
                  Add Review
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItem;
