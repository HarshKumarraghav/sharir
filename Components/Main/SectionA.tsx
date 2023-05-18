import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import AppleDownload from "../../public/Images/Downloads/appledownload.svg";
import GoogleDownload from "../../public/Images/Downloads/googleplay.svg";
const SectionA = () => {
  return (
    <>
      <section className="text-white w-screen h-screen font-main">
        <Header />
        <main className="w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="font-bold w-3/4 md:w-4/6 text-center text-[30px] md:text-[50px]">
            Fitness Anytime, Anywhere: The App That Fits Your Active Lifestyle!
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-8 pt-4 lg:pt-24">
            <div className="cursor-pointer">
              <Image src={AppleDownload} alt="" />
            </div>
            <div className="cursor-pointer">
              <Image src={GoogleDownload} alt="" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default SectionA;
