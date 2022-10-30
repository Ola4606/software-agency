import React from "react";
import projectImage from "../../../images/project.jpg";

function Projects() {
  return (
    <div className="w-full bg-black flex flex-col justify-start items-start px-4 pb-20 md:pl-40 md:pr-40 md:pb-64">
      <div className="bg-black mt-12 md:max-w-5xl md:mt-28">
        <p className="text-start text-white font-medium font-titleBold mb-1 text-4xl md:mb-4 md:text-8xl">
          Our Latest Projects
        </p>
      </div>

      <div className="flex items-start w-full flex-col justify-start mt-12 md:flex-row md:justify-between md:mt-28">
        <img src={projectImage} alt="" className="w-full h-min md:w-min md:h-[550px] bg-cover" />

        <div className="flex flex-col justify-start items-start w-full mt-12 md:w-[500px] md:h-[550px] md:mt-0">
          <p className="text-start text-white font-medium font-titleBold text-2xl mb-4 md:text-4xl md:mb-16">
            eCommerce Website Design For Fashion Brand
          </p>
          <p className="text-start text-white font-light font-titleNorm text-base mb-12 md:text-xl md:mb-24">
            Our company was dedicated to building professional and 100%
            responsive eCommerce websites for the newest online business in town
            – TechBox. With dynamic designs and software, they are already
            attracting many clients.
          </p>
          <div className="inline-block bg-transparent border-white rounded-full text-white font-medium font-titleNorm py-1 px-3 border text-base md:py-2 md:px-5 md:border-2 md:text-lg md:cursor-pointer md:transform md:duration-300 md:ease-in-out md:hover:scale-105 md:hover:border-indigo-500">
            <span>View Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
