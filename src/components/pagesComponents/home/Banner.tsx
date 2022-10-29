import React from "react";
import Team2 from "../../../images/team2.jpg";

function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${Team2})` }}
      className={`w-full h-[570px] bg-no-repeat bg-cover bg-center py-10`}
    >
      <div className="flex justify-start items-start pl-60">
        <p className="mb-24 text-start text-white font-bold italic font-titleBold text-7xl">
          Design
        </p>
      </div>
      <div className="flex justify-end items-start pr-60">
      <p className="mb-24 text-start text-white font-medium font-titleNorm text-8xl">
          Software
        </p>
      </div>
      <div className="flex justify-start items-start pl-96">
      <p className="mb-24 text-start text-white font-bold italic font-titleCasual text-9xl">
          Creativity
        </p>
      </div>
    </div>
  );
}

export default Banner;
