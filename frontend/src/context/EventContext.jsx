import React, { createContext, useContext } from 'react'; 






const EventContext = createContext(null); 

export const useEvent = () => useContext(EventContext); 

export function EventProvider({ children }) { 
    
    
    
    return ( 
        <EventContext.Provider 
            value={{ 
            }}
        >
            {children}
        </EventContext.Provider>
    )
}
