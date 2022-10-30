import React from "react";

function Intro() {
  return (
    <div className="mt-40 flex flex-col justify-start items-start pl-40 max-w-5xl">
      <p className="mb-4 text-start text-black font-light font-titleNorm text-2xl">
        One-Stop Solution For All Your Business Needs
      </p>
      <p className="mb-10 text-start text-black font-medium font-titleBold text-8xl">
        Creating <span className="text-main-purple">Softwares </span>& Digital
        Excellence
      </p>
      <p className="mb-24 text-start text-black font-light font-titleNorm text-2xl">
        A short About. A short About. A short About. A short About. A short
        About.A short About. A short About. A short About. A short About. A
        short About. A short About. A short About. A short About. A short About.
        A short About. A short About. A short About. A short About.
      </p>
      <div className="py-7 px-14 bg-yellow-500 rounded-full text-black cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-indigo-500">
        <span className="text-center font-medium font-titleNorm text-lg">
          Explore Our Work
        </span>
      </div>
    </div>
  );
}

export default Intro;
