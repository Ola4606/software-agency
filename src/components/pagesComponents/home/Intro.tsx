import React from "react";

function Intro(props: any) {
  return (
    <div className="flex flex-col justify-start items-start px-4 mt-16 md:px-10 md:mt-24 lg:pl-40 lg:max-w-5xl lg:mt-40" ref={props.refp}>
      <p className="text-start text-black font-light font-titleNorm text-lg mb-2 md:text-xl md:mb-3 lg:text-2xl lg:mb-4">
        One-Stop Solution For All Your Business Needs
      </p>
      <p className="text-start text-black font-medium font-titleBold text-4xl mb-4 md:text-5xl md:mb-6 lg:text-8xl lg:mb-10">
        Creating <span className="text-main-purple">Softwares </span>& Digital
        Excellence
      </p>
      <p className="text-start text-black font-light font-titleNorm mb-10 text-lg md:mb-16 md:text-xl lg:text-2xl lg:mb-24">
        A short About. A short About. A short About. A short About. A short
        About.A short About. A short About. A short About. A short About. A
        short About. A short About. A short About. A short About. A short About.
        A short About. A short About. A short About. A short About.
      </p>
      <div className="bg-yellow-500 rounded-full text-black py-2 px-5 md:py-3 md:px-7 lg:py-7 lg:px-14 lg:cursor-pointer lg:transform lg:duration-300 lg:ease-in-out lg:hover:scale-105 lg:hover:text-white lg:hover:bg-indigo-500">
        <span className="text-center font-medium font-titleNorm text-base lg:text-lg">
          Explore Our Work
        </span>
      </div>
    </div>
  );
}

export default Intro;
