import React from "react";

function BottomBar() {
  return (
    <div className="flex flex-col justify-start items-start bg-white w-full mt-12 md:mt-36">
      <div className="flex w-full flex-col justify-start items-start px-4 md:flex-row md:justify-between md:items-center md:pl-40 md:pr-20">
        <p className="text-start text-black font-titleBold font-medium text-lg md:text-2xl">
          Joe's Agency
        </p>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0 md:w-80">
          <p className="text-black font-casual font-medium text-base mb-2 md:text-lg md:mb-4">
            ABOUT
          </p>
          <p className="text-black font-titleNorm font-light text-sm mb-2 md:text-base md:mb-4">
            Leading software company to turn your ideas into technological
            wonders
          </p>
        </div>
        <div className="flex flex-col justify-start items-start mt-4 md:mt-0 md:w-80">
          <p className="text-black font-casual font-medium text-base mb-2 md:text-lg md:mb-4">
            CONTACT
          </p>
          <p className="text-black font-titleNorm font-light text-sm mb-2 md:text-base md:mb-4">
            Joeagency@gmail.com
            <br />
            +000 0000 000
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 w-full mt-8 mb-5 md:mt-24 md:mb-10">
        <p className="flex justify-start items-start text-gray-400 font-normal font-casual text-sm px-4 mt-3 md:text-base md:pl-40 md:pr-20 md:mt-8">
          Copyright 2022 | Joe's Agency
        </p>
      </div>
    </div>
  );
}

export default BottomBar;
