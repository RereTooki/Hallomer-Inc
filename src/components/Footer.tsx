import React from "react";
import logo from "../assets/icons/LOGO.svg";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="sborder-4 border-white/50 text-white flex flex-col items-center pb-4 px-4 gap-14 selection:bg-white selection:text-[#111]">
        <div className="sborder-4 w-full transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]">
          <img
            className="w-full h-[85px] drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
            src={logo}
            alt="hallomer Logo"
          />
        </div>
        <div className="">
          <div className="attribution underline-offset-4 whitespace-nowraps poppinsFont text-center text-white text-sm sborder-4">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/mehbubur-rahman/"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              V.O Fatoki
            </a>{" "}
            ✦ Developed by{" "}
            <a
              href="https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              Rerel'Oluwa Tooki
            </a>{" "}
            ✦ © 2025 Hallomer - All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
