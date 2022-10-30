import React from "react";

type SideImagePropType = {
  image: any;
};

export function SideImage1({ image }: SideImagePropType) {
  return (
    <div className="flex justify-end items-start w-full mt-10 lg:mt-8 lg:h-[520px] lg:bg-split-image-background-a">
      <img
        src={image}
        alt="Team"
        className="w-full rounded-none lg:h-full lg:w-min lg:rounded-l-xl"
      />
    </div>
  );
}

export function SideImage2({ image }: SideImagePropType) {
  return (
    <div className="flex justify-start items-start w-full mt-10 lg:mt-8 lg:h-[520px] lg:bg-split-image-background-b">
      <img
        src={image}
        alt="Team"
        className="w-full rounded-none lg:h-full lg:w-min lg:rounded-r-xl"
      />
    </div>
  );
}
