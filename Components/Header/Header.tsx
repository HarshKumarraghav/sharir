import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsGooglePlay } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full h-32 md:h-44 font-main text-white flex lg:justify-around justify-between px-4 lg:px-8 items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-head font-bold cursor-grab">Sharira</h1>
        </div>
        <div className="hidden lg:flex w-1/3 justify-evenly items-center">
          <div className="cursor-pointer">About us</div>
          <div className="cursor-pointer">Privacy</div>
          <div className="cursor-pointer">Community</div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="lg:hidden cursor-pointer animate-none transform hover:scale-110 hover:animate-pulse"
        >
          <BiMenuAltRight size={30} />
        </button>
      </div>
      <div
        className={`transform ${
          showModal ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 h-full w-full z-50 overflow-x-hidden transition-all duration-500`}
      >
        <MobileMenu setShowModal={setShowModal} showModal={showModal} />
      </div>
    </>
  );
};

export default Header;
