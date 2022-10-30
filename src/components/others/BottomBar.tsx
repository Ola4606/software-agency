import React from "react";

function BottomBar() {
  return (
    <div className="flex flex-col justify-start items-start bg-white w-full mt-12 md:mt-24 lg:mt-36">
      <div className="flex w-full flex-col justify-start items-start px-4 md:px-10 lg:flex-row lg:justify-between lg:items-center lg:pl-40 lg:pr-20">
        <p className="text-start text-black font-titleBold font-medium text-lg md:text-xl lg:text-2xl">
          Joe's Agency
        </p>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-12 lg:mt-0 lg:w-80">
          <p className="text-black font-casual font-medium text-base mb-2 lg:text-lg lg:mb-4">
            ABOUT
          </p>
          <p className="text-black font-titleNorm font-light text-sm mb-2 lg:text-base lg:mb-4">
            Leading software company to turn your ideas into technological
            wonders
          </p>
        </div>
        <div className="flex flex-col justify-start items-start mt-4 md:mt-8 lg:mt-0 lg:w-80">
          <p className="text-black font-casual font-medium text-base mb-2 lg:text-lg lg:mb-4">
            CONTACT
          </p>
          <p className="text-black font-titleNorm font-light text-sm mb-2 lg:text-base lg:mb-4">
            Joeagency@gmail.com
            <br />
            +000 0000 000
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 w-full mt-8 mb-5 md:mt-12 md:mb-7 lg:mt-24 lg:mb-10">
        <p className="flex justify-start items-start text-gray-400 font-normal font-casual text-sm px-4 mt-3 md:px-10 md:mt-5 lg:text-base lg:pl-40 lg:pr-20 lg:mt-8">
          Copyright 2022 | Joe's Agency
        </p>
      </div>
    </div>
  );
}

export default BottomBar;
