import React from "react";
import WhatWeDoItems from "./WhatWeDoItems";

function WhatWeDoIntro(props: any) {
  return (
    <div className="w-full bg-main-purple flex flex-col justify-start items-start pb-20 md:pb-40 lg:pb-64" ref={props.refp}>
      <div className="bg-main-purple px-4 mt-12 md:px-10 md:mt-20 lg:pl-40 lg:max-w-5xl lg:mt-28">
        <p className="text-start text-white font-medium font-titleBold mb-1 text-4xl md:mb-2 md:text-5xl lg:mb-4 lg:text-8xl">
          Turning Your Ideas Into Cutting-edge Technologies
        </p>
      </div>
      <WhatWeDoItems />
    </div>
  );
}

export default WhatWeDoIntro;
