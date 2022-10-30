import React from "react";

type SideImagePropType = {
  image: any;
};

export function SideImage1({ image }: SideImagePropType) {
  return (
    <div className="flex justify-end items-start w-full mt-10 md:mt-8 md:h-[520px] md:bg-split-image-background-a">
      <img
        src={image}
        alt="Team"
        className="w-full rounded-none md:h-full md:w-min md:rounded-l-xl"
      />
    </div>
  );
}

export function SideImage2({ image }: SideImagePropType) {
  return (
    <div className="flex justify-start items-start w-full mt-10 md:mt-8 md:h-[520px] md:bg-split-image-background-b">
      <img
        src={image}
        alt="Team"
        className="w-full rounded-none md:h-full md:w-min md:rounded-r-xl"
      />
    </div>
  );
}
