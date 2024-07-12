import React from "react";

const Mosaic: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`relative aspect-w-1 aspect-h-1 overflow-hidden ${
            index === 0 ? "col-span-1" : ""
          } ${index === 1 ? "col-span-2" : ""} ${
            index === 2 ? "col-span-1" : ""
          } ${index === 3 ? "col-span-1" : ""} ${
            index === 4 ? "col-span-1" : ""
          } ${index === 5 ? "col-span-2" : ""}`}
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

export default Mosaic;
