import React from "react";

const OrderInformation = () => {
  const orderDetails = {
    subTotal: 5.0,
    shippingCharge: 50.0,
    tax: 0.1,
    discount: 0.0,
    total: 55.1,
    name: "Symun",
    totalItem: "1 Item",
    deliveryTime: "Express Delivery",
    shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
    billingAddress: "Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus sint, 51397, Aut fugiat iusto do",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-16">
      <div className="col-span-2">
        <table className="text-sm">
          <tr>
            <th className="text-xl font-bold pb-4 ">Total Amount</th>
          </tr>
          {Object.entries(orderDetails)
            .slice(0, 5)
            .map(([key, value]) => (
              <tr key={key}>
                <td className="py-2 font-semibold">{key.replace(/([a-z])([A-Z])/g, "$1 $2")}</td>
                <td className="py-2">:</td>
                <td className="py-2 pl-8">${value.toFixed(2)}</td>
              </tr>
            ))}
        </table>
      </div>
      <div className="col-span-3">
        <table className="text-sm ">
          <tr>
            <th className="whitespace-nowrap text-xl font-bold pb-4">Order Details</th>
          </tr>
          {Object.entries(orderDetails)
            .slice(5)
            .map(([key, value]) => (
              <tr key={key}>
                <td className="py-2 font-semibold">{key.replace(/([a-z])([A-Z])/g, "$1 $2")}</td>
                <td className="py-2">:</td>
                <td className="py-2 pl-8">{value}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default OrderInformation;
