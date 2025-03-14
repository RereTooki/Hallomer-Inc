import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import RecentWorks from "./RecentWorks";
import Services from "./Services";
import Connect from "./Connect";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div className="bg-[#111] border-4s">
        <NavBar />
        <Landing />
        <AboutMe />
        <RecentWorks />
        <Services />
        <Connect />
        <Footer />
      </div>
      {/* <p
        className="text-6xl font-bold interFont underline text-center"
        data-aoss="zoom-in"
        data-aoss-duration="500"
      >
        ssss rere
      </p> */}
    </>
  );
};

export default Homepage;
