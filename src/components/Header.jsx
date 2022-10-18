import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from "../helpers/img/chef1.png";
import { BiShoppingBag } from "react-icons/bi";
import Avtar from "../helpers/img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <header className=" bg-white z-50 w-screen p-2 px-5">
      {/*desktop/Tablet*/}
      <div className="hidden md:flex w-full p-1 items-center justify-between">
        <Link to={"/"} className="flex items-center gap-1">
          <img src={Logo} alt="logo" className="w-16 " />
          <p className="text-headingColor text-xl font-bold">Chief</p>
        </Link>

        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-8 cursor-pointer">
            <li className="text-base  text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Service
            </li>
            <li className="text-base text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              About Us
            </li>
          </ul>
          <div className="relative flex items-center justify-center mr-8">
            <BiShoppingBag className="text-textColor text-3xl ml-8 cursor-pointer" />
            <div className="w-4 h-4 absolute top-0.5 -right-1.5 rounded-full bg-cartNumBg flex justify-center items-center">
              <p className="text-sm text-white font-semibold">5</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avtar}
              alt="user-profile"
              className="w-10 h-10 min-h-[40px] min-w-[40px] drop-shadow cursor-pointer"
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/*mobile*/}
      <div className="flex md:hidden w-full h-full bg-blue-500">s</div>
    </header>
  );
};

export default Header;
