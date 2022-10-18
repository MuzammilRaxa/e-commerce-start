import React from "react";
import Slider from "./Slider";
import ProductCard from "./ProductCard";

const MainContainer = () => {
  return (
    <div>
      <Slider />
      <div className="flex items-center gap-2 flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default MainContainer;
