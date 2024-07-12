// ImageGallery.tsx

import React from "react";

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="relative aspect-w-1 aspect-h-1 overflow-hidden"
        >
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full transform transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
