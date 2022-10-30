import React from "react";
import projectImage from "../../../images/project.jpg"

function Projects() {
  return (
    <div className="w-full bg-black flex flex-col justify-start items-start pl-40 pr-40 pb-64">
      <div className="mt-28 bg-black max-w-5xl">
        <p className="mb-4 text-start text-white font-medium font-titleBold text-8xl">
          Our Latest Projects
        </p>
      </div>

      <div className="mt-20 flex justify-between items-start w-full">
        <img src={projectImage} alt="" className="h-[550px] bg-cover" />

        <div className="flex flex-col justify-between items-start w-[500px] h-[550px]">
          <div className="flex flex-col justify-start items-start">
          <p className="mb-16 text-start text-white font-medium font-titleBold text-4xl">
            eCommerce Website Design For Fashion Brand
          </p>
          <p className= "text-start text-white font-light font-titleNorm text-xl">
            Our company was dedicated to building professional and 100%
            responsive eCommerce websites for the newest online business in town
            – TechBox. With dynamic designs and software, they are already
            attracting many clients.
          </p>
          </div>
          <div className="inline-block py-2 px-5 bg-transparent border-2 border-white rounded-full text-white font-medium font-titleNorm text-lg cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:border-indigo-500">
            <span>View Live</span>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-between items-start w-full">
        <img src={projectImage} alt="" className="h-[550px] bg-cover" />

        <div className="flex flex-col justify-between items-start w-[500px] h-[550px]">
          <div className="flex flex-col justify-start items-start">
          <p className="mb-16 text-start text-white font-medium font-titleBold text-4xl">
            eCommerce Website Design For Fashion Brand
          </p>
          <p className= "text-start text-white font-light font-titleNorm text-xl">
            Our company was dedicated to building professional and 100%
            responsive eCommerce websites for the newest online business in town
            – TechBox. With dynamic designs and software, they are already
            attracting many clients.
          </p>
          </div>
          <div className="inline-block py-2 px-5 bg-transparent border-2 border-white rounded-full text-white font-medium font-titleNorm text-lg cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:border-indigo-500">
            <span>View Live</span>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-between items-start w-full">
        <img src={projectImage} alt="" className="h-[550px] bg-cover" />

        <div className="flex flex-col justify-between items-start w-[500px] h-[550px]">
          <div className="flex flex-col justify-start items-start">
          <p className="mb-16 text-start text-white font-medium font-titleBold text-4xl">
            eCommerce Website Design For Fashion Brand
          </p>
          <p className= "text-start text-white font-light font-titleNorm text-xl">
            Our company was dedicated to building professional and 100%
            responsive eCommerce websites for the newest online business in town
            – TechBox. With dynamic designs and software, they are already
            attracting many clients.
          </p>
          </div>
          <div className="inline-block py-2 px-5 bg-transparent border-2 border-white rounded-full text-white font-medium font-titleNorm text-lg cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:border-indigo-500">
            <span>View Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
