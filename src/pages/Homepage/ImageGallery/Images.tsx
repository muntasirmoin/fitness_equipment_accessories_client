// Images.tsx

import React from "react";
import ImageGallery from "./ImageGallery";
import Mosaic from "./Mosaic";

const Images: React.FC = () => {
  const images = [
    "https://i.ibb.co/8x9BQCv/i6.jpg",
    "https://i.ibb.co/yk8NhxY/i5.jpg",
    "https://i.ibb.co/z67K4LM/i44.jpg",
    "https://i.ibb.co/j5p953z/i33.jpg",
    "https://i.ibb.co/LhJ7Xq0/i22.jpg",
    "https://i.ibb.co/8zVNnGd/i1.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <hr />
      <h1 className="text-3xl font-bold text-center mb-4 text-green-500">
        Image Gallery
      </h1>
      {/* <ImageGallery images={images} /> */}
      <Mosaic images={images}></Mosaic>
    </div>
  );
};

export default Images;
