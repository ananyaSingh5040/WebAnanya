import React from "react";
import { Link, NavLink } from "react-router-dom";



export const Navbar = () => {
    return(
        <>
        <ul>
        <li>
        <NavLink to="/"  className={({isActive})=>isActive? "active-link":""}>Home</NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({isActive})=>isActive? "active-link":""}>About</NavLink>
        </li>
        </ul>
        </>
    );
};
