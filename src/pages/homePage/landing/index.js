import React from "react";
import Hero from "./components/hero";
import OurServices from "./components/ourServices";
import Testimony from "./components/testimony";
import WhyUs from "./components/whyUs";

const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <OurServices />
      <WhyUs />
      <Testimony />
      {/* <CTABanner /> */}
      {/* <FAQ {...propsFAQ}/> */}
    </React.Fragment>
  );
};

export default Landing;
