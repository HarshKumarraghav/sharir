import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsGooglePlay } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
const Header = () => {
  return (
    <div className="w-full h-32 md:h-44  text-white flex  md:justify-around justify-between px-4 md:px-8 items-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-head font-bold">Sharira</h1>
      </div>
      <div className="hidden lg:flex w-1/2 justify-evenly items-center">
        <div>About us</div>
        <div>Privacy</div>
        <div>Community</div>
        <div className="px-2 py-1 border-white border-2 rounded-lg flex  items-center">
          <div>
            <AiFillApple size={30} />
          </div>
          <div>
            <p className="text-[10px] leading-1/2">Download on the</p>
            <p className="font-semibold text-md text-center leading-1/2">
              App Store
            </p>
          </div>
        </div>
        <div className="px-2 py-1 border-white border-2 rounded-lg flex  items-center">
          <div>
            <BsGooglePlay size={23} />
          </div>
          <div className="leading-1/2">
            <p className="text-[10px] leading-1/2">Download on the</p>
            <p className="font-semibold text-md text-center leading-1/2">
              Play Store
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <BiMenuAltRight size={30} />
      </div>
    </div>
  );
};

export default Header;
