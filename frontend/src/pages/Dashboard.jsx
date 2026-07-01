import React from 'react'; 
import { FaPlus } from "react-icons/fa";
import Filter from '../components/Filter';
import Card from '../components/Card';
import { useEvent } from '../context/EventContext';
import { MdSpaceDashboard } from "react-icons/md";

// Dashboard: manage and create events. After clicking create it should display cards of the event that you created.

// fyi when clicking create it should redirect to a form where you input your information and should display at dashboard as cards. logic value upcoming and past is already not properly configured so make it work too, but test them all first before pushing.

export default function Dashboard() {
    const { myEvents } = useEvent();

    return (
        <div>
            <div className="mt-10 flex flex-row justify-between items-center px-20">
                <div className="text-3xl font-semibold flex flex-row items-center gap-2 justify-center"><MdSpaceDashboard className='mt-0.5' /> Dashboard</div>
                <div><button className='btn flex gap-2'><FaPlus className='text-sm' />Create</button></div>
            </div>
            <div>
                <Filter />
                {myEvents.length > 0 ? (
                    myEvents.map((event) => (
                        <Card key={event.id} event={event} />
                    ))
                ) : (
                    <div className="text-center text-gray-400 mt-10 py-10">
                        <p className="text-lg">No events yet. Click <strong>Create</strong> to add one!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
