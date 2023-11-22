import React from "react";
import { Helmet } from "react-helmet";
import AboutV2 from "../components/screen/AboutV2";

const AboutUsV2 = () => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - About</title>
        <meta charSet="utf-8" name="description" content="DailyBuy About Page" />
      </Helmet>
      <AboutV2 />
    </div>
  );
};

export default AboutUsV2;
