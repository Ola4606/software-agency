import React from "react";
import projectImage from "../../../images/project.jpg";

function Projects(props: any) {
  return (
    <div className="w-full bg-black flex flex-col justify-start items-start px-4 pb-20 md:px-10 md:pb-40 lg:pl-40 lg:pr-40 lg:pb-64" ref={props.refp}>
      <div className="bg-black mt-12 md:mt-18 lg:max-w-5xl lg:mt-28">
        <p className="text-start text-white font-medium font-titleBold mb-1 text-4xl md:mb-2 md:text-5xl lg:mb-4 lg:text-8xl">
          Our Latest Projects
        </p>
      </div>

      <div className="flex items-start w-full flex-col justify-start mt-12 md:mt-18 lg:flex-row lg:justify-between lg:mt-28">
        <img src={projectImage} alt="" className="w-full h-min lg:w-min lg:h-[550px] bg-cover" />

        <div className="flex flex-col justify-start items-start w-full mt-12 mt-18 lg:w-[500px] lg:h-[550px] lg:mt-0">
          <p className="text-start text-white font-medium font-titleBold text-2xl mb-4 md:text-3xl md:mb-8 lg:text-4xl lg:mb-16">
            eCommerce Website Design For Fashion Brand
          </p>
          <p className="text-start text-white font-light font-titleNorm text-base mb-12 md:mb-16 lg:text-xl lg:mb-24">
            Our company was dedicated to building professional and 100%
            responsive eCommerce websites for the newest online business in town
            – TechBox. With dynamic designs and software, they are already
            attracting many clients.
          </p>
          <div className="inline-block bg-transparent border-white rounded-full text-white font-medium font-titleNorm py-1 px-3 border text-base lg:py-2 lg:px-5 lg:border-2 lg:text-lg lg:cursor-pointer lg:transform lg:duration-300 lg:ease-in-out lg:hover:scale-105 lg:hover:border-indigo-500">
            <span>View Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
