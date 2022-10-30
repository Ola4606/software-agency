import React from "react";

function BottomBar() {
  return (
    <div className="flex flex-col justify-start items-start bg-white mt-36 w-full">
      <div className="pl-40 pr-20 flex justify-between items-center w-full">
        <p className="text-start text-black font-medium font-titleBold text-2xl">
          Joe's Agency
        </p>
        <div className="flex flex-col justify-start items-start w-80">
          <p className="mb-4 text-black font-casual font-medium text-lg">
            ABOUT
          </p>
          <p className="mb-4 text-black font-titleNorm font-light text-base">
            Leading software company to turn your ideas into technological
            wonders
          </p>
        </div>
        <div className="flex flex-col justify-start items-start w-80">
          <p className="mb-4 text-black font-casual font-medium text-lg">
            CONTACT
          </p>
          <p className="mb-4 text-black font-titleNorm font-light text-base">
            Joeagency@gmail.com
            <br />
            +000 0000 000
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 mt-24 mb-10 w-full">
        <p className="pl-40 pr-20 mt-8 flex justify-start items-start text-base text-gray-400 font-normal font-casual">
          Copyright 2022 | Joe's Agency
        </p>
      </div>
    </div>
  );
}

export default BottomBar;
