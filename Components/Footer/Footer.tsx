import React from "react";
import { BiGlobe } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

type Props = {};

const Footer = () => {
  return (
    <>
      <div className=" text-grey-600 bg-[#161517] grid grid-cols-1 gap-y-10 text-text bg-primary shadow-light-card px-8 py-14 md:grid-cols-3 font-custom text-white">
        <div className="flex flex-col text-text">
          <div className="font-head text-xl md:text-2xl">Sharir</div>
          <p className="text-md mt-2">
            "Fitness Anytime, Anywhere: The App That Fits Your Active
            Lifestyle!."
          </p>
        </div>
        <div className="flex text-xs flex-col  text-text">
          <h5 className="font-bold text-center mb-8 text-lg  hover:text-primary-color transition">
            Social
          </h5>
          <div className="flex justify-center">
            <a href="https://github.com/HarshKumarraghav" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <BsGithub size={30} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"
              target="_blank"
            >
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <BsLinkedin size={30} />
              </div>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <BsInstagram size={30} />
              </div>
            </a>

            <a href="https://twitter.com/_Harsh_raghav_" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <BsTwitter size={30} />
              </div>
            </a>

            <a href="https://harshraghav.me" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <BiGlobe size={30} />
              </div>
            </a>
          </div>
        </div>

        <div className="flex text-xs flex-col text-text">
          <h5 className="font-bold text-lg  text-center mb-2 hover:text-primary-color transition">
            About Us
          </h5>
          <h2 className="text-sm">
            We understand how important it is to stay active and healthy, even
            when you are traveling, and that is why we have developed an app
            that provides credits to users that can be used at affiliated gyms.
            With our app, you can easily find a gym near your current location,
            redeem credits, and stay on track with your fitness goals.
          </h2>
        </div>
      </div>
      <div className="display flex items-center flex-col bg-black text-white">
        <h5 className="text-[12px]">Ⓒ2023 Sharir inc. All rights reserved. </h5>
      </div>
    </>
  );
};

export default Footer;
