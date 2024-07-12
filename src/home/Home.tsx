import React from "react";
import HeroSection from "../pages/Homepage/HeroSection";
import CategoriesSection from "../pages/Homepage/CategoriesSection";
import FeaturedProducts from "../pages/Homepage/FeaturedProducts";
import BenefitsSection from "../pages/Homepage/BenefitsSection";
import Images from "../pages/Homepage/ImageGallery/Images";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <FeaturedProducts></FeaturedProducts>
      <BenefitsSection></BenefitsSection>
      {/* image gallery */}
      <Images></Images>
    </>
  );
};

export default Home;
