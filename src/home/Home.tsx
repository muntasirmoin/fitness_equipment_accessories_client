import React from "react";
import HeroSection from "../pages/Homepage/HeroSection";
import CategoriesSection from "../pages/Homepage/CategoriesSection";
import FeaturedProducts from "../pages/Homepage/FeaturedProducts";
import BenefitsSection from "../pages/Homepage/BenefitsSection";
import Images from "../pages/Homepage/ImageGallery/Images";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | FitZone</title>
      </Helmet>
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
