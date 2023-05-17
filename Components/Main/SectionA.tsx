import React from "react";
import { BsApple } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";
import Header from "../Header/Header";
const SectionA = () => {
  return (
    <>
      <section className="text-white w-screen h-screen ">
        <Header />
        <main className="w-full h-5/6 flex flex-col justify-center items-center">
          <h1 className="font-bold w-3/4 md:w-4/6 text-center text-[30px] md:text-[50px]">
            Fitness Anytime, Anywhere: The App That Fits Your Active Lifestyle!
          </h1>
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 pt-4 lg:pt-24">
            <div className="px-2 py-1 md:px-4 md:py-2 gap-x-2 border-white border-2 rounded-lg flex items-center justify-between cursor-pointer">
              <div>
                <BsApple size={40} />
              </div>
              <div className="leading-1/2">
                <p className="text-md leading-1/2">Download on the</p>
                <p className="font-semibold text-xl md:tracking-widest text-center leading-1/2">
                  App Store
                </p>
              </div>
            </div>
            <div className="px-2 py-1 md:px-4 md:py-2 gap-x-2 border-white border-2 rounded-lg flex items-center justify-between cursor-pointer">
              <div>
                <SiGoogleplay size={40} />
              </div>
              <div className="leading-1/2">
                <p className="text-md leading-1/2">Download on the</p>
                <p className="font-semibold text-xl md:tracking-widest text-center leading-1/2">
                  Play Store
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default SectionA;
