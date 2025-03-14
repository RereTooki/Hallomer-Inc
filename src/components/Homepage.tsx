import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Landing from "./Landing";
import AboutMe from "./AboutMe";

const Homepage = () => {
  return (
    <>
      <div className="bg-[#111] border-4s">
        <NavBar />
        <Landing />
        <AboutMe />
      </div>
      {/* <p
        className="text-6xl font-bold interFont underline text-center"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        ssss rere
      </p> */}
    </>
  );
};

export default Homepage;
