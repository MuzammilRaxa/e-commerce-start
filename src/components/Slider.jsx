import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import siled1 from "../helpers/img/c7.png";

const Slider = () => {
  const arrowStyle =
    "rounded-full hover:bg-slate-300  duration-500 ease-in-out flex justify-center items-center cursor-pointer";
  return (
    <div className="w100% h-[500px] flex justify-between items-center  bg-white">
      <div className={arrowStyle}>
        <IoIosArrowBack style={{ fontSize: "30px" }} />
      </div>
      <div className="w-[100%] h-[450px] ">
        <img src={siled1} alt="Chiken" className="h-[80%] " />
      </div>
      <div className={arrowStyle}>
        <IoIosArrowForward style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default Slider;
