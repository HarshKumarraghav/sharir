import React from "react";
import Image from "next/image";
import ShowCaseImage from "../../public/Images/realmain3.png";

const SectionB = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-[#E12056] text-white">
      <div className="w-full h-1/2 md:h-full md:w-1/2 flex justify-center">
        <Image
          src={ShowCaseImage}
          alt="showcaseimage"
          className="animate-fade-in w-3/4 md:w-full"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center md:w-1/2 p-8">
        <h1 className="text-xl md:text-4xl font-bold mb-4">
          Unlock Your Fitness Potential: Gain Access to the Best Gyms in Every
          City!
        </h1>
        <p className="text-[12px] md:text-lg">
          The app's credit system allows users to earn rewards for staying
          active while traveling, providing additional motivation to maintain
          their fitness goals. With its user-friendly interface, the app makes
          it effortless for travelers to track their workouts, find fitness
          facilities or activities nearby, and stay on track with their fitness
          routines. This combination of features enables users to enjoy their
          travels while simultaneously prioritizing their health and well-being.
        </p>
      </div>
    </div>
  );
};

export default SectionB;
