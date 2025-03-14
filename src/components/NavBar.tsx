import React from "react";
import logo from "../assets/icons/LOGO.svg";
import sidebar from "../assets/icons/sidebar.svg";

const NavBar = () => {
  return (
    <>
      <div
        className="fixed w-full text-white flex justify-center items-center transition ease-in-out duration-500 delay-10 py-6 px-4 sborder-4 z-30 select-none "
        data-aoss="fade-down"
        data-aoss-duration="1200"
      >
        <div className="w-full  sborder-[10px] bg-[#151515CC] border-[1px] border-[#33888] backdrop-blur-[20px] rounded-full py-[16px] px-[16px] md:px-[32px] flex justify-between ">
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0 w-[36%] h-full ">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
              src={logo}
              alt="hallomer Logo"
            />
          </div>
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0 w-[5.5%]">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
              src={sidebar}
              alt="sidebar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
