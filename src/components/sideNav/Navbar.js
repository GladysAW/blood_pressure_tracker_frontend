import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData.js";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./Navbar.scss";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const shownavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <NavLink to="#" className="menu-bars">
            <FaBars onClick={shownavbar} />
          </NavLink>
        </div>

        <nav className={navbar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={shownavbar} className="nav-menu-items">
            <li className="navbar-toggle">
              <NavLink to="#" className="menu-bars">
                <AiOutlineClose />
              </NavLink>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <NavLink to={item.path} target={item.target}>
                    {item.icon} <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
