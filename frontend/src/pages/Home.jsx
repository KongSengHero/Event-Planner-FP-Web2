import React from 'react'; 
import Profile from '../components/Profile';
import { NavLink } from 'react-router-dom';





export default function Home() { 
    return ( 
        <div>
            <div className='px-16 py-52 items-center justify-center flex flex-col'>
                <h1 className='text-4xl font-semibold'>Plan Your Perfect Event</h1>
                <p className='text-lg text-gray-300 mt-4'>Create, manage, and join amazing events. From meetups to conferences,</p>
                <p className='text-lg text-gray-300'>we've got everything you need to make your event a success.</p>
                <div className='flex gap-5 mt-10'>
                    <NavLink className="btn" to="/">Get Started</NavLink>
                    <NavLink className="btn" to="/dashboard">Browse Events</NavLink>
                </div>
            </div>
            <Profile />
        </div>
    )
}
