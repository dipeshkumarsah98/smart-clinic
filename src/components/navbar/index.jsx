import React, { useState, useRef } from "react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from '../../img/logo.png'


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const item = useRef(null);
  const handleToggle = () => {
    const hidden =
      "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1";
    const visible =
      "justify-between items-center w-full lg:flex lg:w-auto lg:order-1";
    if (toggle) {
      //every thing is visible
      item.current.className = hidden;
      return setToggle(!toggle);
    }
    item.current.className = visible;
    return setToggle(!toggle);
  };


  return (
    <nav className="bg-[#29c39d] py-1 px-2 border border-gray-300 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* logo and company name */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="mr-3 w-20 md:w-24 lg:w-32 " />
          {/* <span className="font-mono font-semibold text-xl">Movie Explore</span> */}
        </Link>
        <div className="flex order-2 ">
          {/* open menu */}
          {toggle ? (
            <GiTireIronCross
              className="text-2xl cursor-pointer my-3 ml-2 font-thin lg:hidden"
              onClick={handleToggle}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl cursor-pointer lg:hidden"
              onClick={handleToggle}
            />
          )}
         
        </div>
        <div
          ref={item}
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 ">
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600  rounded md:text-lg md:bg-transparent cursor-pointer md:p-0 dark:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600  rounded md:text-lg md:bg-transparent cursor-pointer md:p-0 dark:text-white">
              <Link to="/top-250-movies">Find a Doctor</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600 rounded md:text-lg md:bg-transparent cursor-pointer  md:p-0 dark:text-white">
              <Link to="/in-theater">Download Lab Report</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600  rounded md:text-lg md:bg-transparent cursor-pointer md:p-0 dark:text-white">
              <Link to="/contact">About Us</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600 rounded md:text-lg md:bg-transparent cursor-pointer  md:p-0 dark:text-white">
              <Link to="/coming-soon">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};