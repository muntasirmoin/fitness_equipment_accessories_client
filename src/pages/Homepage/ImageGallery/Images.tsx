// Images.tsx

import React from "react";
import ImageGallery from "./ImageGallery";

const Images: React.FC = () => {
  const images = [
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    // "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",

    // Add more image URLs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Image Gallery work remain
      </h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Images;
