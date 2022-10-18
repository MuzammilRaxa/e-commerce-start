import React from "react";
import Counter from "../components/Counter";
import productImage from "../helpers/img/cu4.png";
import { Header } from "../components";

const Cart = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const PaymentDetails =
    "flex w-[100%] bg-white p-3 h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-[1] flex-col justify-center  items-center mobile:mt-7 mobile:mb-7";
  return (
    <div>
      <Header />
      <div className="w-[60%]">
        {/* <div className="flex justify-center text-5xl">Cart</div>

        upper buttons div
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0">
            Goto Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: 3</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn mt-0">Checkout Now</button>
        </div> */}

        {/* vertically center parent div */}
        <div className="border m-3 p-3 flex flex-row mt-12 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            <div className={PaymentDetails}>
              <div className=" product flex flex-col items-center flex-1 p-5 self-start">
                <img
                  className="product_img w-[9rem]"
                  src={productImage}
                  alt="product_img"
                />
                <div className="flex-1  flex flex-col h-[100%] w-[100%] px-5">
                  <Counter />
                  <div className="flex flex-col w-[100%] ">
                    <p className="mt-7 text-3xl flex justify-between">
                      Price: <b>$70</b>
                    </p>
                  </div>
                </div>

                {/*Price and Quantity Div*/}
              </div>

              <div className="flex-1 flex flex-col justify-between items-center w-auto h-[40vh] border-2 rounded-md shadow-lg p-5 text-lg mobile:mb-6">
                <h1 className="text-[2rem] border-b ">SUMMARY</h1>
                <div>
                  <div className={SummaryItemStyle}>
                    <p>SubTotal:</p>
                    <p>$140</p>
                  </div>
                  <div className={SummaryItemStyle}>
                    <p>Delivery:</p>
                    <p>$10</p>
                  </div>
                  <div className={SummaryItemStyle}>
                    <p>Discount:</p>
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
    </div>
  );
};

export default Cart;
