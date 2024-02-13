import React from "react";
import AddToCart from "../AddToCart";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600">
      <AddToCart />
    </div>
  );
};

export default ProductCard;