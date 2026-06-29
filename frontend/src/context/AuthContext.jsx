import React, { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from 'react'; 






const AuthContext = createContext(null); 

export const useAuth = () => useContext(AuthContext); 

export function AuthProvider({ children }) { 
    const [user, setUser] = useState(null); 
    const [desiredName, setDesiredName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(''); 
    const hasRan = useRef(false); 
    
    function handleCreateAccount() { }
    function handleLogin() { }
    function handleSignout() { }
    
    useEffect(() => { 
        if (hasRan.current) return; 
        hasRan.current = true; 
        console.log('[Auth] Initialize')
    })
    
    return ( 
        <AuthContext.Provider 
            value={{ 
                user, 
                loading, 
                error, 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
