import React from "react";
import WhatWeDoItems from "./WhatWeDoItems";

function WhatWeDoIntro() {
  return (
    <div className="w-full bg-main-purple flex flex-col justify-start items-start pb-20 md:pb-64">
      <div className="bg-main-purple px-4 mt-12 md:pl-40 md:max-w-5xl md:mt-28">
        <p className="text-start text-white font-medium font-titleBold mb-1 text-4xl md:mb-4 md:text-8xl">
          Turning Your Ideas Into Cutting-edge Technologies
        </p>
      </div>
      <WhatWeDoItems />
    </div>
  );
}

export default WhatWeDoIntro;
