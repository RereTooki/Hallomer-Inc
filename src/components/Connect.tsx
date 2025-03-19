import React from "react";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import arrUP from "../assets/icons/arrUp.svg";

const email = "bookhotdjhallomer@gmail.com"; // Replace with the recipient's email address

const handleEmailClick = () => {
  window.location.href = `mailto:${email}`;
};

const phoneNumber = "+49 (344) 000 00"; // Replace with the recipient's phone number
const message = encodeURIComponent("Hello, I'm interested in a collaboration!"); // Encode message

const handleWhatsAppClick = () => {
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const handleInstagramClick = () => {
  window.open(`https://instagram.com`, "_blank");
};

const handleYoutubeClick = () => {
  window.open(`https://youtube.com`, "_blank");
};

const handleLinkedInClick = () => {
  window.open(`https://linkedin.com`, "_blank");
};

const Connect = () => {
  return (
    <>
      <div className="sborder-4 border-white/50 text-white flex flex-col items-center pb-14 px-4 gap-8 selection:bg-white selection:text-[#111] lg:pt-0 lg:px-12">
        <h2
          className="font-tusker text-[32px] lg:text-[64px] mxl:text-[84px] xxxl:text-[90px] sborder-4 w-[64%] text-center tracking-wide"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          WE WOULD LOVE TO HEAR MORE FROM YOU. <br></br>LET'S COLLABORATE!
        </h2>
        <div className="sborder-4 gap-4 flex flex-col w-full interFont">
          <div className="gap-4 flex flex-col w-full lg:flex-row lg:flex-wrap sborder-2">
            <div
              className="p-4 bg-[#151515] flex justify-between items-center rounded-sm r shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] grow"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="flex gap-2 items-center">
                <SiGmail className="border-[1px] rounded-full p-2 w-[16px]" />
                <p
                  className="text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px]"
                  onClick={handleEmailClick}
                >
                  {email}
                </p>
              </div>
              <div className="sborder-2 w-[16px] h-[16px] ">
                <img
                  className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
                  src={arrUP}
                  alt="up arrow"
                />
              </div>
            </div>
            <div
              className="p-4 bg-[#151515] flex justify-between items-center rounded-sm r shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] grow"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="flex gap-2 items-center">
                <FaWhatsapp className="border-[1px] rounded-full p-2 w-[16px]" />
                <p
                  className="text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px]"
                  onClick={handleWhatsAppClick}
                >
                  {phoneNumber}
                </p>
              </div>
              <div className="sborder-2 w-[16px] h-[16px] ">
                <img
                  className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
                  src={arrUP}
                  alt="up arrow"
                />
              </div>
            </div>
          </div>
          <div className="gap-4 flex flex-col w-full  lg:flex-row lg:flex-wrap">
            <div
              className="p-4 bg-[#151515] flex justify-between items-center rounded-sm r shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] grow"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="flex gap-2 items-center">
                <SiInstagram className="border-[1px] rounded-full p-2 w-[16px]" />
                <p
                  className="text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px]"
                  onClick={handleInstagramClick}
                >
                  Instagram
                </p>
              </div>
              <div className="sborder-2 w-[16px] h-[16px] ">
                <img
                  className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
                  src={arrUP}
                  alt="up arrow"
                />
              </div>
            </div>
            <div
              className="p-4 bg-[#151515] flex justify-between items-center rounded-sm r shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] grow"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="flex gap-2 items-center">
                <SiYoutube className="border-[1px] rounded-full p-2 w-[16px]" />
                <p
                  className="text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px]"
                  onClick={handleYoutubeClick}
                >
                  Youtube
                </p>
              </div>
              <div className="sborder-2 w-[16px] h-[16px] ">
                <img
                  className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
                  src={arrUP}
                  alt="up arrow"
                />
              </div>
            </div>
            <div
              className="p-4 bg-[#151515] flex justify-between items-center rounded-sm r shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02] grow"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="flex gap-2 items-center">
                <FaLinkedin className="border-[1px] rounded-full p-2 w-[16px]" />
                <p
                  className="text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px]"
                  onClick={handleLinkedInClick}
                >
                  LinkedIn
                </p>
              </div>
              <div className="sborder-2 w-[16px] h-[16px] ">
                <img
                  className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
                  src={arrUP}
                  alt="up arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
