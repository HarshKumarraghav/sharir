import React from "react";
import Image from "next/image";
import AppleDownload from "../../public/Images/Downloads/appledownload.svg";
import GoogleDownload from "../../public/Images/Downloads/googleplay.svg";
import { AiOutlineClose } from "react-icons/ai";
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
          <div className="cursor-pointer">
            <Image src={AppleDownload} alt="" />
          </div>
          <div className="cursor-pointer">
            <Image src={GoogleDownload} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
