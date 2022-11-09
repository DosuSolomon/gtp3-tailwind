import React, { useContext, useState } from "react";
import logo from "./../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { SiteContext } from "../context/siteContext";

const Navbar = () => {
  const {handleSave} = useContext(SiteContext)
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleClick=()=>{
    console.log("Click")
  }
  // const Menu = () => (
  //   <>
  //     <p>
  //       <a href="#">Home</a>
  //     </p>
  //     <p>
  //       <a href="#">What's GPT3</a>
  //     </p>
  //     <p>
  //       <a href="#">Open AI</a>
  //     </p>
  //     <p>
  //       <a href="#">Case Studies</a>
  //     </p>
  //     <p>
  //       <a href="#">Library</a>
  //     </p>
  //   </>
  // );
  const menu = [
    {
      id: 1,
      link: <a href="#">Home</a>,
    },
    {
      id: 2,
      link: <a href="#">What's GPT3</a>,
    },
    {
      id: 3,
      link: <a href="#">Open AI</a>,
    },
    {
      id: 4,
      link: <a href="#">Case Studies</a>,
    },
    {
      id: 5,
      link: <a href="#">Library</a>,
    },
  ];
  return (
    <div className="flex flex-row lg:justify-between justify-between items-center text-[#fff] text-[18px] pt-8 px-20">
      <div className="flex flex-row gap-10 lg:justify-between items-center">
        <div className="flex">
          <a href="#">
            <img src={logo} alt="Logo" srcset="" />
          </a>
        </div>
        <div className="hidden lg:flex gap-12">
          {menu.map(({ link, id }) => (
            <p key={id}>{link}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-center items-center ">
        <button onClick={handleSave}  className="">Sign in</button>
        <button onClick={handleClick} className="bg-[#FF4820] text-white py-3 px-6 rounded-[5px]">
          Sign up
        </button>
        <div onClick={()=>{
          setToggleMenu(!toggleMenu)
        }}>
          {toggleMenu ? <GiHamburgerMenu /> : <RiCloseLine />}
        </div>
        
        {/* <div
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <div className=" flex lg:hidden">
            {toggleMenu ? <GiHamburgerMenu /> : <RiCloseLine /> }
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
