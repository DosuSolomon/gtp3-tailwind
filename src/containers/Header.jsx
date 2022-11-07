import React,{useContext} from "react";
import image from "./../assets/header-img.png";
import group from "./../assets/group.png";
import "../index.css";
import { SiteContext } from "../context/siteContext";

const Header = () => {
  const {handleClick} = useContext(SiteContext)
  return (
    <div className="flex lg:flex-row flex-col items-center content-center px-20">
      <div className="flex flex-col flex-[1] gap-6">
        <p className="gradient-text text-[50px] font-[900] leading-[70px]">
          Let’s Build Something amazing with GPT-3 OpenAI
        </p>
        <p className="flex w-[500px] text-[#81AFDD] text-[16px] font-[300] ">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex flex-row  w-full">
          <input
            className="flex w-full py-3 px-4 flex-1 border-none rounded-tl-md rounded-bl-md bg-[#052D56] text-[#3D6184]"
            placeholder="Your email address"
            type="text"
            name=""
            id=""
          />
          <button onClick={handleClick} className="py-3 px-10 rounded-tr-md rounded-br-md bg-[#FF4820] text-[18px] font-[500] text-white">
            Get Started
          </button>
        </div>
        <div className="flex flex-row content-center items-center gap-4">
          <div className="flex w-[180px]">
            <img
              className="w-[100%] h-[100%]"
              src={group}
              alt="image2"
              srcset=""
            />
          </div>

          <p className="flex text-white text-[12px]">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex flex-[.9]">
        <img className="flex w-[100%]" src={image} alt="image3" srcset="" />
      </div>
    </div>
  );
};

export default Header;
