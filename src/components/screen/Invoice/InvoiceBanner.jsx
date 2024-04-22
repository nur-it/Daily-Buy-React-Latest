import React from "react";
import "../../../styles/invoice.css";

const InvoiceBanner = () => {
  const invoiceDetails = {
    invoiceNo: "254 45487 54",
    issuedDate: "11 Jan 2023",
    dueDate: "15 Jan 2023",
  };

  const billingDetails = {
    name: "Ismail Hussain",
    address: "Kasba, Brahmanbaria, Bangladesh",
  };

  return (
    <div className="container mt-[80px] lg:mt-[40px]">
      <div className="bg-primary-600 banner-bg rounded-[10px] text-white text-[14px] lg:text-[18px]">
        <div className="flex flex-col md:flex-row justify-between p-[14px] md:p-[30px] lg:p-[71px] gap-[26px]">
          {/* Invoice Details */}
          <div className="space-y-4">
            <h1 className="uppercase font-semibold text-[16px] md:text-[24px] pb-6">
              Invoice
            </h1>
            <p>
              <span className="text-white/70 font-normal">Invoice No:</span>{" "}
              {invoiceDetails.invoiceNo}
            </p>
            <p>
              <span className="text-white/70 font-normal">Issued Date:</span>{" "}
              {invoiceDetails.issuedDate}
            </p>
            <p>
              <span className="text-white/70 font-normal">Due Date:</span>{" "}
              {invoiceDetails.dueDate}
            </p>
          </div>

          {/* Billing Details */}
          <div className="max-w-[200px] space-y-6">
            <h1 className="uppercase font-semibold text-[16px] md:text-[24px] pb-6">
              billing to
            </h1>
            <p>{`${billingDetails.name}, ${billingDetails.address}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBanner;
