import React from "react";
import Hero from "../component/hero/Hero";
import Patner from "../component/patner/Patner";
import Service from "../component/services/Service";
import Pricing from "../component/pricing/Pricing";
import WorkProcess from "../component/workprocess/WorkProcess";
import NewsLetter from "../component/newsletter/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <Patner />
      <Service />
      <Pricing />
      <WorkProcess />
      <NewsLetter />
    </>
  );
};

export default Home;
