import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
  	<nav className="header">
      <h1>GameRep</h1>
      <div className="navlink"><a href="/">Home</a></div>
      <div className="navlink"><a href="/">Discover</a></div>
      <div className="navlink"><a href="/">Random Game</a></div>
      <div className="navlink"><a href="/">Request Game</a></div>
    </nav>
  );
 };

 export default Navbar;
