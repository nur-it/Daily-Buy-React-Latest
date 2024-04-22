import React from "react";
import { Helmet } from "react-helmet";
import InvoiceBanner from "../components/screen/Invoice/InvoiceBanner";
import InvoiceTable from "../components/screen/Invoice/InvoiceTable";

const Invoice = () => {
  return (
    <>
      <Helmet>
        <title>DailyBuy - Invoice</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Invoice Page"
        />
      </Helmet>
      <InvoiceBanner />
      <InvoiceTable />
    </>
  );
};

export default Invoice;
