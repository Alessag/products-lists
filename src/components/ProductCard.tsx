import React from "react";

type Props = {
  thumbnail: string;
  title: string;
  brand: string;
};

export default function ProductCard({ thumbnail, title, brand }: Props) {
  return (
    <div className="border-2 border-red-500 flex flex-col items-center">
      <img
        src={thumbnail}
        alt={`${title} image `}
        className="border-2 border-blue-500 w-60 h-60 object-cover"
      />
      <h3>Title: {title}</h3>
      <p>Brand: {brand}</p>
    </div>
  );
}
