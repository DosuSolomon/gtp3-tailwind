import React from "react";
import feature from "../assets/feature.png";
const Possibility = () => {
  return (
    <div className="flex flex-row justify-center items-center my-14  px-[100px] ">
      <div className="flex-1">
        <img className="flex w-full" src={feature} alt="" srcSet="" />
      </div>
      <div className="flex flex-1 justify-start mt-[200px]  items-baseline flex-col gap-[30px] ">
        <h6 className="text-[#71E5FF]">Request Early Access to Get Started</h6>
        <h1 className="w-[426px] gradient-text text-[34px] font-[800] leading-[45px]">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h6 className="text-[#FF8A71]">Request Early Access to Get Started</h6>
      </div>
    </div>
  );
};

export default Possibility;
