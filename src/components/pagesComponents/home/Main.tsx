import React from "react";
import { SideImage1, SideImage2 } from "../../others/SideImage";
import Intro from "./Intro";
import TeamImage from "../../../images/team.png";
import VRImage from "../../../images/vr.jpg";
import WhatWeDoIntro from "./WhatWeDoIntro";
import More from "./More";
import Projects from "./Projects";
import Banner from "./Banner";
import BottomBar from "../../others/BottomBar";
import { useRef } from "react";
import NavBar from "../../others/NavBar";

function Main() {
  const refToAbout: any = useRef(null);
  const refToServices: any = useRef(null);
  const refToProjects: any = useRef(null);

  const scrollToAbout = () => {
    refToAbout.current!.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    refToServices.current!.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    refToProjects.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToServices={scrollToServices}
        scrollToProjects={scrollToProjects}
      />
      <Intro refp={refToAbout} />
      <SideImage1 image={TeamImage} />
      <WhatWeDoIntro refp={refToServices} />
      <More />
      <SideImage2 image={VRImage} />
      <Projects refp={refToProjects} />
      <Banner />
      <BottomBar />
    </div>
  );
}

export default Main;
