import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col text-center bg-[#9538E2] pb-52  rounded-2xl text-white  relative mb-96 ">
      <div className="space-y-4 pt-16 mb-28">
        <h2 className="font-bold text-5xl text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h2>
        <p className="text-center text-gray-200">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn rounded-full">Shop Now</button>
      </div>
      <div className="absolute top-80 left-52 backdrop-blur-xl w-8/12 ">
        <div className="border-2 p-2 rounded-2xl">
        <img
          src={banner}
          alt=""
          className="  rounded-2xl  "
        />
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
