import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "./navLinks.css";

const NavLinks = () => {
    const location = useLocation();
    
    // Lenken skal toggle mellom kalendervisning og listevisning
    let to = location.pathname === "/" ? "/calendar" : "/";
    let visning= location.pathname === "/" ? "kalendervisning" : "listevisning";
  
    return (        
        <button tabIndex="-1" id="toggleBtn">
            <NavLink 
                tabIndex="0" 
                className="link" 
                to={ to }>
                    Skift til { visning }</NavLink>
        </button>
    )
}

export default NavLinks;