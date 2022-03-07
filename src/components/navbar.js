import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
  	<nav className="header">
      <h1>GameRep</h1>
      <div className="navlink"><a href="/">Home</a></div>
      <div className="navlink"><a href="/discover">Discover</a></div>
      <div className="navlink"><a href="/random">Random Game</a></div>
      <div className="navlink"><a href="/request">Request Game</a></div>
      <div className="navlink"><a href="/login">Log In</a></div>
      <div className="navlink"><a href="/signup">Sign Up</a></div>
    </nav>
  );
 };

 export default Navbar;
