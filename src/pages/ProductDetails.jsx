import React from "react";
import { Header } from "../components";
import { Counter } from "../components";
import image from "../helpers/img/cu3.png";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center flex-col sm:flex-row sm:mt-4">
        <div className="flex-1 pr-3 flex items-center justify-center">
          <img
            src={image}
            className="product_img w-[270px]"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.5] p-1 sm:px-14 sm:p-5 flex flex-col items-center justify-items-center sm:flex-col ">
          <h1 className="title text-[40px] text-center mobile:text-[30px]">
            Creamy Prawns Karai
          </h1>
          <div className="flex flex-col sm:px-16 w-[100%] p-7 ">
            <p className="mt-7 text-3xl flex justify-between">
              Price: <b>$70</b>
            </p>

            <div className=" flex justify-between mt-7 text-2xl">
              Masala
              <select className="border-[2px] border-silver rounded-md">
                <option selected>Select</option>
                <option className="bg-red-400">Ligh</option>
                <option className="bg-red-500">Medium</option>
                <option className="bg-red-600">High</option>
              </select>
            </div>

            <div className="mt-7 text-2xl flex items-baseline justify-between">
              Size
              <select className="border-[2px] border-silver rounded-md">
                <option selected>Select</option>
                <option>Regular</option>
                <option>Half</option>
                <option>Full</option>
                <option>PerKG</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#893fff] rounded-md shadow-md mt-[30px] p-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
