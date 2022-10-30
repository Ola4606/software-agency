import React from "react";

function Intro() {
  return (
    <div className="flex flex-col justify-start items-start px-4 mt-16 md:pl-40 md:max-w-5xl md:mt-40">
      <p className="text-start text-black font-light font-titleNorm text-lg mb-2 md:text-2xl md:mb-4">
        One-Stop Solution For All Your Business Needs
      </p>
      <p className="text-start text-black font-medium font-titleBold text-4xl mb-4 md:text-8xl md:mb-10">
        Creating <span className="text-main-purple">Softwares </span>& Digital
        Excellence
      </p>
      <p className="text-start text-black font-light font-titleNorm mb-10 text-xl md:text-2xl md:mb-24">
        A short About. A short About. A short About. A short About. A short
        About.A short About. A short About. A short About. A short About. A
        short About. A short About. A short About. A short About. A short About.
        A short About. A short About. A short About. A short About.
      </p>
      <div className="bg-yellow-500 rounded-full text-black py-2 px-5 md:py-7 md:px-14 md:cursor-pointer md:transform md:duration-300 md:ease-in-out md:hover:scale-105 md:hover:text-white md:hover:bg-indigo-500">
        <span className="text-center font-medium font-titleNorm text-lg">
          Explore Our Work
        </span>
      </div>
    </div>
  );
}

export default Intro;
