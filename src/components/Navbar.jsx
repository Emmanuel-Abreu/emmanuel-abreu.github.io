import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/styles/Navbar.css'

export default function Navbar(){
    return (
        <header>
          <nav className="Navbar">
						<NavLink to="" className="">
							<p></p>
						</NavLink>
						<NavLink to="" className="">
							<p></p>
						</NavLink>
						<NavLink to="" className="">
							<p></p>
						</NavLink>
						<NavLink to="" className="">
							<p></p>
						</NavLink>
          </nav>
        </header>
    );
}