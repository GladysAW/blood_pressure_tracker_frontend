import React from "react";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaWikipediaW } from "react-icons/fa";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    className: "nav-text",
    target: "_self",
  },
  {
    title: "Tracker Info",
    path: "/TrackerInfo",
    icon: <BsFillInfoSquareFill />,
    className: "nav-text",
    target: "_self",
  },
  {
    title: "Wiki Source",
    path: "https://en.wikipedia.org/wiki/Blood_pressure",
    icon: <FaWikipediaW />,
    className: "nav-text",
    target: "_blank",
  },
];
