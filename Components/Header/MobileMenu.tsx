import React, { useEffect } from "react";
import { AiFillApple, AiOutlineClose } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const MobileMenu = ({ showModal, setShowModal }: Props) => {
  const handleClose = (e: any) => {
    if (e.target.id === "modelContainer") {
      setShowModal(false);
    }
  };

  if (!showModal) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex  justify-center bg-black  text-white"
      id="modelContainer"
      onClick={handleClose}
    >
      <div>
        <div className="w-screen h-32 text-white flex justify-end px-4  items-center">
          <AiOutlineClose
            size={30}
            onClick={() => setShowModal(false)}
            className="lg:hidden cursor-pointer animate-none transform hover:scale-120 hover:animate-pulse"
          />
        </div>
        <div className="flex flex-col w-full h-1/2 justify-evenly items-center">
          <div className="cursor-pointer">About us</div>
          <div className="cursor-pointer">Privacy</div>
          <div className="cursor-pointer">Community</div>
          <div className="px-2 py-1 border-white border-2 rounded-lg flex  items-center cursor-pointer">
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
          <div className="px-2 py-1 border-white border-2 rounded-lg flex  items-center cursor-pointer">
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
      </div>
    </div>
  );
};

export default MobileMenu;
