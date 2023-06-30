import React from "react";
import Review from "./Review";
import Pricing from "./Pricing";
import About from "./About";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #7A3199 0%, #161033 100%)",
        }}
      >
        <Header />
        <HeroSection />
      </div>
      <About />
      <Pricing />
      <Review />
      <Footer />
    </div>
  );
};

export default Main;
