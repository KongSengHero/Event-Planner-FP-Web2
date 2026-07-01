import React from 'react'; 
import { NavLink } from 'react-router-dom'; 





export default function NavigationHeader() { 
    return ( 
        <div className='px-16 py-5 items-center justify-between flex flex-row border-b border-gray-500 bg-neutral-900'>
            <div>
                <p className='text-white text-2xl font-bold'>EventPlanner</p>
            </div>
            <div className='flex gap-10 items-center'>
                <NavLink className='text-white hover:text-blue-500 text-xl' to="/home">Home</NavLink>
                <NavLink className='text-white hover:text-blue-500 text-xl' to="/dashboard">Dashboard</NavLink>
                <NavLink className='text-white hover:text-blue-500 text-xl' to="/global_event">Global Event</NavLink>
                <NavLink className='text-white hover:text-blue-500 text-xl' to="/contact">Contact</NavLink>
                <NavLink className='text-white hover:text-blue-500 text-xl' to="/about">About</NavLink>
            </div>
            <div>
                <NavLink className='btn' to="/">Login</NavLink>
            </div>
        </div>
    )
}
