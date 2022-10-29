import React from "react";
import WhatWeDoItems from "./WhatWeDoItems";

function WhatWeDoIntro() {
  return (
    <div className="w-full bg-main-purple flex flex-col justify-start items-start pb-64">
      <div className="mt-28 bg-main-purple pl-40 max-w-5xl">
        <p className="mb-4 text-start text-white font-medium font-titleBold text-8xl">
          Turning Your Ideas Into Cutting-edge Technologies
        </p>
      </div>
      <WhatWeDoItems />
    </div>
  );
}

export default WhatWeDoIntro;
