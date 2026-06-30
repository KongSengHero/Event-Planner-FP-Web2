import React from 'react'; 



// Thepy part to manage and create events. After clicking create it should display cards of the event that you created.

// fyi when clicking create it should redirect to a form where you input your information and should display at dashboard as cards.

export default function Dashboard() { 
    return ( 
        <div>
            <div className="mt-10 flex flex-row justify-between items-center px-20">
                <div className="text-3xl font-semibold">Dashboard</div>
                <div><button className='btn'>Create</button></div>
            </div>
        </div>
    )
}
