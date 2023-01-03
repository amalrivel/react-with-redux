import React from "react";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
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
      <CTABanner />
      <FAQ />
    </React.Fragment>
  );
};

export default Landing;
