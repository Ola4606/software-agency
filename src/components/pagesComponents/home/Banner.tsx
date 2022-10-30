import React from "react";
import Team2 from "../../../images/team2.jpg";

function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${Team2})` }}
      className={`w-full bg-no-repeat bg-cover bg-center h-min py-4 md:h-[570px] md:py-10`}
    >
      <div className="flex justify-start items-start pl-20 md:pl-60">
        <p className="text-start text-white font-bold italic font-titleBold text-3xl mb-12 md:text-7xl md:mb-24">
          Design
        </p>
      </div>
      <div className="flex justify-end items-start pr-20 md:pr-60">
      <p className="text-start text-white font-bold italic font-titleBold text-4xl mb-12 md:text-8xl md:mb-24">
          Software
        </p>
      </div>
      <div className="flex justify-start items-start pl-24 md:pl-96">
      <p className="text-start text-white font-bold italic font-titleBold text-5xl mb-12 md:text-8xl md:mb-24">
          Creativity
        </p>
      </div>
    </div>
  );
}

export default Banner;
