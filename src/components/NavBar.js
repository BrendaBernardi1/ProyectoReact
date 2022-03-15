import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { CartWidget, MenuIcon } from "./Icons";
import { Logo } from "./Logo";
import NavItemsMobile from "./NavItemsMobile";

const NavBar = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div className="fixed  block top-0 w-full shadow-md z-50 bg-gray-50">
      <div className="relative flex items-center px-4 py-2">
        <NavLink onClick={() => setDisplay("hidden")} to="/">
          <Logo />
        </NavLink>

        <div className="flex items-center ml-4 lg:ml-8 space-x-4 text-md tracking-normal font-normal">
        <h1> Panaderia "El Trebol"</h1>  
        <div className="hidden xl:block space-x-6 ">  
            <NavLink
              to="/"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Nuestros Productos
            </NavLink>
            </div>
            
          <NavLink to="/cart" className="absolute right-14">
            <CartWidget />
          </NavLink>
          <div className="absolute right-4 xl:hidden">
            <div
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon display={display} />
            </div>
          </div>
          <NavItemsMobile display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
