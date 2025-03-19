import React from "react";
import arrUP from "../assets/icons/arrUp.svg";
import vid1 from "../assets/video/vid1.mp4";
import vid2 from "../assets/video/vid2.mp4";
import vid3 from "../assets/video/vid3.mp4";

type Project = {
  id: number;
  title: string;
  description: string;
  video: string;
  year: string;
};

const projectData: Project[] = [
  {
    id: 1,
    title: "A Nighttime Journey",
    description: "Urban Videography",
    video: vid1,
    year: "2024",
  },
  {
    id: 2,
    title: "Twilight Dance",
    description: "Art Film",
    video: vid1,
    year: "2023",
  },

  {
    id: 3,
    title: "Crossing Time",
    description: "Art Film",
    video: vid3,
    year: "2024",
  },
  {
    id: 4,
    title: "Surf and Soar",
    description: "Drone Videography",
    video: vid3,
    year: "2018",
  },
  {
    id: 5,
    title: "Ballet in the Ruins",
    description: "Art Videography",
    video: vid3,
    year: "2024",
  },
  {
    id: 6,
    title: "Street Hoops",
    description: "Sports Videography",
    video: vid3,
    year: "2019",
  },
];

const RecentWorks = () => {
  return (
    <>
      <div className="sborder-4 border-white/50 text-white flex flex-col pb-14 px-4 gap-8 selection:bg-white selection:text-[#111] lg:pt-6 lg:px-12">
        <div className="flex justify-between sborder-4 items-end">
          <h2
            className="font-tusker text-[32px] lg:text-[64px] mxl:text-[84px] xxxl:text-[100px] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] sborder-4 w-fit"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Recent Works
          </h2>
          <div
            className="flex gap-2 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] border-b-[1px] items-center "
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <h3
              className="interFont text-[12px] lg:text-[14px] mxl:text-[16px] xxxl:text-[18px]"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              ALL RECENT WORKS
            </h3>
            <div
              className="sborder-4 w-[9px] h-[9px] "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
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
              className={`relative sborder-8 rounded-[10px] border-white/50  h-[200px] lg:h-auto lg:max-h-[310px] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]  smb-[32px]  lg:border-white lg:w-[48%] grow  ${
                index % 2 === 0
                  ? "sm:flex-row border-r-2 tab:border-r-4 lg:border-0 "
                  : "sm:flex-row-reverse border-l-2 tab:border-l-4 lg:border-0 "
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // AOS animations
              data-aos-duration="900"
            >
              {/* Video */}

              <video
                src={project.video} // Replace with the path to your video file
                loop
                autoPlay
                muted
                className="w-full h-full object-cover shadow-2xl dark:shadow-gray-600 lg:dark:shadow-none hover:cursor-pointer rounded-[10px] "
              />

              {/* Text */}
              <div className="sborder-4 absolute w-full bottom-2 interFont px-2 lg:px-4">
                <h3 className="text-[16px] sborder-4 font-medium mix-blend-difference">
                  {project.title}
                </h3>
                <div className="flex justify-between text-[12px] sborder-4 mix-blend-difference">
                  <p className="">{project.description}</p>
                  <p className="">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentWorks;
