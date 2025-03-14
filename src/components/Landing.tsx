import React from "react";
import flags from "../assets/images/FLAGS.png";
import flagsL from "../assets/icons/flagsLarge.svg";
import flagsS from "../assets/icons/flagsSmall.svg";
import arrDown from "../assets/icons/arrDown.svg";

const Landing = () => {
  const email = "bookhotdjhallomer@gmail.com"; // Replace with the recipient's email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <>
      <div
        className="text-white h-dvh flex flex-col items-center justify-center sborder-4 px-4 selection:bg-white selection:text-[#111]"
        data-aoss="zoom-in"
        data-aoss-duration="1200"
      >
        <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] w-[88%] h-fit mx-12 select-none w-fitd h-fit z-20">
          <img className="w-fit h-fit" src={flagsS} alt="flags" />
        </div>

        {/* <h1 className="sborder-4 font-tusker text-[18vw] xmd:stext-[16vw] swhitespace-nowrap transition ease-in-out duration-500 delay-10 cursor-pointer shover:scale-[1.04] w-full text-center border-white/20 select-none ">
          EDRISS HALLOMER
        </h1> */}
        <p className="interFont sborder-4 text-sm text-center relative bottom-[5vw] ">
          A dynamic and multifaceted professional with over six years of
          experience spanning various roles including Event Project Management,
          Strategic Planning, Disk Jockeying, Sales Representative, Managing
          Director, Creative Director, and Front Desk Assistant.
        </p>
      </div>
      <div className="relative selection:bg-white selection:text-[#111]">
        <div className="sborder-4 text-white absolute bottom-10 px-4 w-full flex justify-between interFont items-center">
          <div className="sborder-2 flex flex-col text-[12px] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]">
            <p>Get in touch at</p>
            <p
              className="font-semibold transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
              onClick={handleEmailClick}
            >
              bookhotdjhallomer@gmail.com
            </p>
          </div>
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0 w-[32px] h-[32px] animate-bounce select-none">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={arrDown}
              alt="down arrows"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
