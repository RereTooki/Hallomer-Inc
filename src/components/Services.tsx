import React from "react";
import arrUP from "../assets/icons/arrUp.svg";
import vid1 from "../assets/video/vid1.mp4";
import vid2 from "../assets/video/vid2.mp4";
import vid3 from "../assets/video/vid3.mp4";

type Project = {
  id: number;
  title: string;
  video: string;
};

const projectData: Project[] = [
  {
    id: 1,
    title: "Video Editing",
    video: vid1,
  },
  {
    id: 2,
    title: "Professional Disc Jockey",
    video: vid2,
  },

  {
    id: 3,
    title: "Event Project Management",
    video: vid3,
  },
  {
    id: 4,
    title: "Creative Director",
    video: vid2,
  },
  {
    id: 5,
    title: "Restaurant Management",
    video: vid3,
  },
  {
    id: 6,
    title: "Business Consultant",
    video: vid2,
  },
];

const Services = () => {
  return (
    <>
      <div className="sborder-4 border-white/50 text-white flex flex-col pb-14 px-4 gap-8 selection:bg-white selection:text-[#111] lg:pt-0 lg:px-12">
        <div className="flex justify-between sborder-4 items-end">
          <h2
            className="font-tusker text-[32px] lg:text-[64px] mxl:text-[84px] xxxl:text-[100px] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] sborder-4 w-fit"
            data-aoss="fade-down"
            data-aoss-duration="1200"
          >
            Services
          </h2>
          <div className="flex gap-2 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] border-b-[1px] items-center">
            <h3 className="interFont text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px] ">
              GET IN TOUCH
            </h3>
            <div className="sborder-4 w-[9px] h-[9px] ">
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)] max-h-[38px]"
                src={arrUP}
                alt="hallomer Logo"
              />
            </div>
          </div>
        </div>
        <div className="sborder-4 border-double flex flex-col gap-[32px] lg:gap-4 lg:flex-row lg:flex-wrap">
          {" "}
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`relative sborder-8 rounded-[10px] border-white/50  h-[200px] lg:h-auto lg:max-h-[340px] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]   smb-[32px]  lg:border-white lg:w-[48%] grow ${
                [1, 4, 5].includes(project.id) ? "lg:w-[60%]" : "lg:w-[48%]"
              }   ${
                [2, 3, 6].includes(project.id) ? "lg:w-[36%]" : "lg:w-[48%]"
              } ${
                index % 2 === 0
                  ? "sm:flex-row border-r-2 tab:border-r-4 lg:border-0 "
                  : "sm:flex-row-reverse border-l-2 tab:border-l-4 lg:border-0 "
              }   
              `}
              data-aoss={index % 2 === 0 ? "fade-right" : "fade-left"} // AOS animations
              data-aoss-duration="900"
            >
              {/* Video */}

              <video
                src={project.video} // Replace with the path to your video file
                loop
                autoPlay
                muted
                className="w-full h-full object-cover shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none hover:cursor-pointer rounded-[10px]"
              />

              {/* Text */}
              <div className="sborder-4 absolute w-full top-2 interFont px-2 lg:px-4">
                <h3 className="text-[16px] sborder-4 font-medium mix-blend-difference">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
