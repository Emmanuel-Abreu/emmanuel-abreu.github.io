import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/styles/Navbar.css'

export default function Navbar(){
    return (
        <header>
          <nav className="Navbar">
						<NavLink to="/" className="NavLink">
							Home
						</NavLink>
						<NavLink to="/pages/Projects" className="NavLink">
							Projects
						</NavLink>
						<NavLink to="#" className="NavLink">
							####
						</NavLink>
						<NavLink to="/pages/About" className="NavLink">
							About
						</NavLink>
          </nav>
        </header>
    );
}