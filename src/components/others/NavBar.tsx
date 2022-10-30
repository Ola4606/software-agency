import React from "react";

function NavBar(props: any) {
  return (
    <div className="flex flex-row justify-between items-center w-full pl-4 pr-2 mt-4 lg:pl-40 lg:mt-10 lg:pr-10">
      <span className="text-start text-black font-titleBold font-medium text-lg md:text-xl lg:text-2xl">
        Joe's Agency
      </span>
      <div className="flex justify-end items-center">
        <span className="navbar-items" onClick={props.scrollToAbout}>About</span>
        <span className="navbar-items" onClick={props.scrollToServices}>Services</span>
        <span className="navbar-items" onClick={props.scrollToProjects}>Projects</span>
        <div className="py-2 px-5 bg-transparent border-2 border-yellow-500 rounded-full text-black font-medium font-titleNorm text-lg cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:border-indigo-500 hidden lg:flex">
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
