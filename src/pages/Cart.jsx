import React from "react";
import Counter from "../components/Counter";
import productImage from "../helpers/img/cu4.png";

const Cart = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const PaymentDetails =
    "flex w-[100%] border-b h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-[1] flex-col justify-center  items-center mobile:mt-7 mobile:mb-7";
  return (
    <div>
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0">
            Goto Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: 3</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn mt-0">Checkout Now</button>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-12 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            <div className={PaymentDetails}>
              <div className=" product flex flex-[2] pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src={productImage}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Chiken Karai
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Color:</b>
                    <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className="flex-1  flex flex-col h-[100%] w-[100%] px-5">
                <Counter />
                <div className="flex flex-col w-[100%] ">
                  <p className="mt-7 text-3xl flex justify-between">
                    Price: <b>$70</b>
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
                <h1 className="text-[2rem]">SUMMARY</h1>
                <div className={SummaryItemStyle}>
                  <p>SubTotal:</p>
                  <p>$140</p>
                </div>
                <div className={SummaryItemStyle}>
                  <p>Shipping:</p>
                  <p>$10</p>
                </div>
                <div className={SummaryItemStyle}>
                  <p>Shipping Discount:</p>
                  <p>-$10</p>
                </div>
                <div className={SummaryItemStyle + " text-3xl font-bold"}>
                  <p>Total:</p>
                  <p>$140</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
