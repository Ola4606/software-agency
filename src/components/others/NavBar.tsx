import React from "react";

function NavBar() {
  return (
    <div className="pl-40 mt-10 flex flex-row justify-between items-center pr-10">
      <span className="text-start text-black font-medium font-titleBold text-2xl">
        Joe's Agency
      </span>
      <div className="flex justify-end items-center">
        <span className="navbar-items">Home</span>
        <span className="navbar-items">About</span>
        <span className="navbar-items">Services</span>
        <span className="navbar-items">Projects</span>
        <div className="py-2 px-5 bg-transparent border-2 border-yellow-500 rounded-full text-black font-medium font-titleNorm text-lg cursor-pointer transform duration-300 ease-in-out hover:scale-105 hover:border-indigo-500">
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
