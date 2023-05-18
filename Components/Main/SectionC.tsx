import React from "react";
const SectionC = () => {
  return (
    <div
      className="w-screen h-screen flex"
      style={{
        backgroundImage: "url('/Images/bgimage.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col items-center md:p-48 text-white p-8">
        <h1 className="text-[40px] md:text-[70px] font-bold">
          Say Goodbye to Hotel Gyms and Hello to Real Workouts.
        </h1>
        <p className="md:text-2xl md:pr-80">
          The app's versatility, as it can be used by anyone who wants to stay
          active and maintain their fitness goals, whether they are frequent
          travelers or simply prefer to switch up their workout routine.
        </p>
      </div>
    </div>
  );
};

export default SectionC;
