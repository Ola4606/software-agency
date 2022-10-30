import React from "react";

function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center w-full pl-4 pr-2 mt-4 md:pl-40 md:mt-10 md:pr-10">
      <span className="text-start text-black font-titleBold font-medium text-lg md:text-2xl">
        Joe's Agency
      </span>
      <div className="flex justify-end items-center"> 
        <span className="navbar-items">About</span>
        <span className="navbar-items">Services</span>
        <span className="navbar-items">Projects</span>
        <div className="py-2 px-5 bg-transparent border-2 border-yellow-500 rounded-full text-black font-medium font-titleNorm text-lg cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:border-indigo-500 hidden md:flex">
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
