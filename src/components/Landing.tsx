import React from "react";
import flags from "../assets/images/FLAGS.png";

const Landing = () => {
  return (
    <>
      <div className="text-white h-[100vh] flex flex-col items-center justify-center sborder-4 px-4">
        <div className="relative sborder-4 border-white border-double w-[88%] h-fit mx-12">
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] mxm-12 kw-full h-fit absolute top-[-10px] xmd:top-[-25px] z-20">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={flags}
              alt="background-img"
            />
          </div>
        </div>
        <h1 className="sborder-4 font-tusker text-[18vw] xmd:stext-[16vw] swhitespace-nowrap transition ease-in-out duration-500 delay-10 cursor-pointer shover:scale-[1.04] w-full text-center border-white/20 ">
          EDRISS HALLOMER
        </h1>
        <p className="interFont sborder-4 text-sm text-center relative top-8">
          A dynamic and multifaceted professional with over six years of
          experience spanning various roles including Event Project Management,
          Strategic Planning, Disk Jockeying, Sales Representative, Managing
          Director, Creative Director, and Front Desk Assistant.
        </p>
      </div>
    </>
  );
};

export default Landing;
