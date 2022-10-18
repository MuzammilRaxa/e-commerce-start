import React, { useState } from "react";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const ProductCard = () => {
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");
  const handleHoverEnter = () => {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };
  const handleHoverExit = () => {
    setHoverEffects(" opacity-0");
  };

  return (
    <div
      className="flex items-center justify-center  m-2 overflow-hidden rounded-md shadow-lg relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <div className="flex-col items-center  justify-between">
        <img src="../helpers/img/cu3.png" alt="product" className="h-[180px]" />
        <div className="text-center">
          <h5>{"Chiken"}</h5>
          <p>${"15"}</p>
        </div>
      </div>
      <div
        className={`flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100 ${hoverEffects}`}
      >
        <div className={iconStyle}>
          <BiShoppingBag />
        </div>
        <div className={iconStyle}>
          <MdFavoriteBorder />
        </div>
        <div className={iconStyle}>
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
