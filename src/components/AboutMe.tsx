import React from "react";
import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";
import port4 from "../assets/images/port4.png";

const AboutMe = () => {
  return (
    <>
      <div className="sborder-4 border-white/50 text-white flex flex-col py-14 px-4 gap-8 selection:bg-white selection:text-[#111]">
        <h2
          className="font-tusker text-[32px] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] sborder-4 w-fit"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          About Me
        </h2>
        <p
          className="interFont text-[12px] text-justify"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          Hi, I'm Idris Oladeinde Adeyemi, also known as Edriss Hallomer! 🎧
          With over six years of dynamic experience in the entertainment and
          business world, I wear many hats—from video editing to managing
          large-scale events and driving sales to curating unforgettable music
          experiences as a professional DJ. 🌟
        </p>
        <p
          className="interFont text-[12px] text-justify"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          As the Managing Director of Bangees Café, I've led a team of 20+,
          improved operations, and increased our revenue by 25%. Outside the
          business realm, music has always been my passion. I've been a resident
          DJ at countless events, where I blend different genres to create an
          electric atmosphere that keeps the crowd on their feet. My music
          selection is always tailored to the audience, ensuring every event is
          as unique as its guests.{" "}
        </p>
        <p
          className="interFont text-[12px] text-justify"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          Beyond spinning tracks, I’m also skilled in event project management,
          strategic planning, and creative direction. My expertise allows me to
          execute high-profile corporate gatherings, product launches, and
          cultural festivals—all while ensuring every detail is meticulously
          planned and delivered to perfection.{" "}
        </p>
        <p
          className="interFont text-[12px] text-justify"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          Driven by passion, creativity, and strategic thinking, I’m here to
          elevate your events with unmatched energy and professionalism. Let’s
          create something unforgettable together!
        </p>
        <div className="flex flex-col gap-[8px]">
          <div className="sborder-4 flex gap-[8px]">
            <div
              className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0  w-1/2 max-w-[159pxs] h-[159px]"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] rounded-lg"
                src={port1}
                alt="portrait 1"
              />
            </div>
            <div
              className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0  w-1/2 max-w-[159pxs] h-[159px]"
              data-aos="fade-rigtt"
              data-aos-duration="700"
            >
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] rounded-lg"
                src={port2}
                alt="portrait 2"
              />
            </div>
          </div>
          <div className="sborder-4 flex gap-[8px]">
            <div
              className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0  w-1/2 max-w-[159pxs] h-[159px]"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] rounded-lg"
                src={port3}
                alt="portrait 1"
              />
            </div>
            <div
              className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] p-0  w-1/2 max-w-[159pxs] h-[159px]"
              data-aos="fade-down"
              data-aos-duration="700"
            >
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] rounded-lg"
                src={port4}
                alt="portrait 2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
