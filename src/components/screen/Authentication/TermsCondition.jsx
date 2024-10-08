import React from "react";
import { Helmet } from "react-helmet";

const TermsCondition = ({ setPath }) => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - Terms & Condition</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Terms & Condition Page"
        />
      </Helmet>
      <div className="container py-16 px-6">
        <div className="w-full md:w-[650px] h-[400px] relative overflow-y-auto">
          <SectionHeader title="Welcome to Daily Buy" />
          <SectionText>
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at By accessing this website,
            we assume you accept these terms and conditions. Do not continue to
            use KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions, Privacy Statement, and Disclaimer
            Notice, and all Agreements: "Your" refers to you, the person who
            logs on this website and is compliant with the Company’s terms and
            conditions. "Company" refers to both the Client and ourselves. All
            terms refer to the offer, acceptance, and consideration of payment
            necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose.
          </SectionText>
          <SectionHeader title="Cookies" />
          <SectionText>
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at By accessing this website,
            we assume you accept these terms and conditions. Do not continue to
            use KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions, Privacy Statement, and Disclaimer
            Notice, and all Agreements: "Your" refers to you, the person who
            logs on this website and is compliant with the Company’s terms and
            conditions. "Company" refers to both the Client and ourselves. All
            terms refer to the offer, acceptance, and consideration of payment
            necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose.
          </SectionText>
          <SectionHeader title="License" />
          <SectionText>
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at By accessing this website,
            we assume you accept these terms and conditions. Do not continue to
            use KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions, Privacy Statement, and Disclaimer
            Notice, and all Agreements: "Your" refers to you, the person who
            logs on this website and is compliant with the Company’s terms and
            conditions. "Company" refers to both the Client and ourselves. All
            terms refer to the offer, acceptance, and consideration of payment
            necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose.
          </SectionText>
        </div>
        <div className="absolute bottom-5">
          <button
            onClick={() => setPath("signUp")}
            className="bg-primary-600 text-white px-3 py-1 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <h1 className="text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-semibold mt-[26px] lg:mt-[34px] mb-[8px] lg:mb-[12px]">
    {title}
  </h1>
);

const SectionText = ({ children }) => (
  <p className="text-[#626463] text-[16px] lg:-[18px] xl-[24px] mt-[12px]">
    {children}
  </p>
);

export default TermsCondition;
