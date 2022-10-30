import React from "react";
import {SideImage1, SideImage2} from "../../others/SideImage";
import Intro from "./Intro";
import TeamImage from "../../../images/team.png"
import VRImage from "../../../images/vr.jpg"
import WhatWeDoIntro from "./WhatWeDoIntro";
import More from "./More";
import Projects from "./Projects";
import Banner from "./Banner";
import BottomBar from "../../others/BottomBar";


function Main() {
  return (
    <div>
      <Intro />
      <SideImage1 image={TeamImage} />
      <WhatWeDoIntro />
      <More />
      <SideImage2 image={VRImage} />
      <Projects />
      <Banner />
      <BottomBar />
    </div>
  );
}

export default Main;
