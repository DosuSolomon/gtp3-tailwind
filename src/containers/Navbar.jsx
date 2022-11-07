import React, { useState } from "react";
import logo from "./../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex flex-row lg:justify-between justify-between items-center text-[#fff] text-[18px] pt-8 px-20">
      <div className="flex flex-row gap-10 lg:justify-between items-center">
        <div className="flex">
          <a href="#">
            <img src={logo} alt="Logo" srcset="" />
          </a>
        </div>
        <div className="hidden lg:flex gap-12">
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#">What's GPT3</a>
          </p>
          <p>
            <a href="#">Open AI</a>
          </p>
          <p>
            <a href="#">Case Studies</a>
          </p>
          <p>
            <a href="#">Library</a>
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-center items-center ">
        <button className="">Sign in</button>
        <button className="bg-[#FF4820] text-white py-3 px-6 rounded-[5px]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
