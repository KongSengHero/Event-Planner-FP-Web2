import React, { createContext, useContext, useEffect, useRef, useState } from 'react'; 
import { useAuth } from './AuthContext'; 







const EventContext = createContext(null); 
const getStoredGlobalEvent = () => JSON.parse(localStorage.getItem('GLOBAL_EVENTS')) || []; 
const setStoredGlobalEvent = (events) => localStorage.setItem('GLOBAL_EVENTS', JSON.stringify(events)); 

const getStoredMyEvents = () => JSON.parse(localStorage.getItem('MY_EVENTS')) || []; 
const setStoredMyEvents = (events) => localStorage.setItem('MY_EVENTS', JSON.stringify(events)); 

export const useEvent = () => useContext(EventContext); 

export function EventProvider({ children }) { 
    const { user } = useAuth(); 
    const [globalEvents, setGlobalEvents] = useState([]); 
    const [myEvents, setMyEvents] = useState([]); 
    
    const [title, setTitle] = useState(''); 
    const [date, setDate] = useState(''); 
    const [location, setLocation] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [budget, setBudget] = useState(0); 
    const [stages, setStages] = useState([]); 
    
    // const [eventLoading, setEventLoading] = useState(false); // The same reason in AuthContext.jsx 
    const [eventError, setEventError] = useState(''); 
    const hasRan = useRef(false); 
    
    // Helper Functions ────────────────────────────────────────────────────────────────────── 
    function helperGenerateRandomId(length = 16) { 
        const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`; 
        let result = ''; 
        for (let i = 0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length)); 
        return result; 
    }
    
    function resetForms() { 
        
    }
    
    // Main Functions ────────────────────────────────────────────────────────────────────── 
    function handleCreateEvent() { 
        
    }
    
    function handleEditEvent() { 
        
    }
    
    function handleToggleStage() { 
        
    }
    
    function handleJoinLeaveEvent() { 
        
    }
    
    function handleDeleteEvent() { 
        
    }
    
    // Initialize ────────────────────────────────────────────────────────────────────── 
    useEffect(() => { 
        if (hasRan.current) return; 
        hasRan.current = true; 
        console.log('[Event Context] Initialize')
        setGlobalEvents(getStoredGlobalEvent()); 
        setMyEvents(getStoredMyEvents()); 
    }, [])
    
    return ( 
        <EventContext.Provider 
            value={{ 
                globalEvents, 
                myEvents, 
                title, setTitle, 
                date, setDate, 
                description, setDescription, 
                budget, setBudget, 
                stages, setStages, 
                eventError, 
                handleCreateEvent, 
                handleEditEvent, 
                handleToggleStage, 
                handleJoinLeaveEvent, 
                handleDeleteEvent, 
            }}
        >
            {children}
        </EventContext.Provider>
    )
}
