import React from 'react'; 
import { NavLink } from 'react-router-dom'; 





export default function NavigationHeader() { 
    return ( 
        <div>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/global_event">Global Event</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
