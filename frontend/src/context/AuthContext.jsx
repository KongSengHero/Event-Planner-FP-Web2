import React, { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from 'react'; 







const AuthContext = createContext(null); 
const getStoredUsers = () => JSON.parse(localStorage.getItem('AUTH_USERS')) ?? []; 
const setStoredUsers = (users) => localStorage.setItem('AUTH_USERS', JSON.stringify(users)); 

const getStoredCurrentUser = () => JSON.parse(localStorage.getItem('CURRENT_USER')) ?? null; 
const setStoredCurrentUser = (user) => localStorage.setItem('CURRENT_USER', JSON.stringify(user)); 

export const useAuth = () => useContext(AuthContext); 

export function AuthProvider({ children }) { 
    const [user, setUser] = useState(null); 
    const [desiredName, setDesiredName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    
    // const [loading, setLoading] = useState(false); // In this small project, we don't really need loading because everything are too fast 
    const [error, setError] = useState(''); 
    const hasRan = useRef(false); 
    
    // Helper Functions ────────────────────────────────────────────────────────────────────── 
    function helperGenerateRandomId(length = 16) { 
        const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`; 
        let result = ''; 
        for (let i = 0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length)); 
        return result; 
    }
    
    function resetForms() { 
        setDesiredName(''); 
        setEmail(''); 
        setPassword(''); 
        setConfirmPassword(''); 
    }
    
    // Main Functions ────────────────────────────────────────────────────────────────────── 
    function handleCreateAccount() { 
        setError(''); 
        if (!email || !password) return setError('Email and Password are required.'); 
        if (!password !== !confirmPassword) return setError('Passwords do not match'); 
        const normalizeEmail = email.trim().toLowerCase(); 
        
        const users = getStoredUsers(); 
        if (users.find(u => u.email === normalizeEmail)) return setError('This account already exist.'); 
        
        const accountPayload = { 
            id: helperGenerateRandomId(), 
            public_id: helperGenerateRandomId(8), 
            username: desiredName ? desiredName : `User_${helperGenerateRandomId(4)}`, 
            email: normalizeEmail, 
            password: password, 
            profile_url: '', 
            banner_url: '', 
            bio: 'This user has not set a bio yet...' 
        }
        users.push(accountPayload); 
        setStoredUsers(users); 
        
        setStoredCurrentUser(accountPayload); 
        setUser(accountPayload); 
        resetForms(); 
    }
    
    function handleLogin() { 
        setError(''); 
        if (!email || !password) return setError('Email and Password are required.'); 
        const normalizeEmail = email.trim().toLowerCase(); 
        
        const users = getStoredUsers(); 
        const foundUserEmail = users.find(u => u.email === normalizeEmail); 
        
        if (!foundUserEmail) return setError('Could not find existing email.'); 
        if (foundUserEmail.password !== password) return setError('Password is incorrect.'); 
        
        setStoredCurrentUser(foundUserEmail); 
        setUser(foundUserEmail); 
        resetForms(); 
    }
    
    function handleSignout() { 
        localStorage.removeItem('CURRENT_USER'); 
        setUser(null); 
        resetForms(); 
    }
    
    function handleEditAccount(updatedField) { 
        setError(''); 
        if (!user) return setError('You are not an authenticated user.'); 
        
        const users = getStoredUsers(); 
        const updatedUser = { ...user, ...updatedField }; 
        
        const updatedUsersList = users.map(u => u.id === user.id ? updatedUser : u); 
        setStoredUsers(updatedUsersList); 
        
        setStoredCurrentUser(updatedUser); 
        setUser(updatedUser); 
    }
    
    function handleDeleteAccount() { 
        setError(''); 
        if (!user) return setError('You are not an authenticated user.'); 
        
        const users = getStoredUsers(); 
        const filteredUsers = users.filter(u => u.id !== user.id); 
        setStoredUsers(filteredUsers); 
        
        handleSignout(); 
    }
    
    // Initialize ────────────────────────────────────────────────────────────────────── 
    useEffect(() => { 
        if (hasRan.current) return; 
        hasRan.current = true; 
        console.log('[Auth Context] Initialize')
        setUser(getStoredCurrentUser()); 
    }, [])
    
    return ( 
        <AuthContext.Provider 
            value={{ 
                user, 
                desiredName, setDesiredName, 
                email, setEmail, 
                password, setPassword, 
                confirmPassword, setConfirmPassword, 
                error, 
                handleCreateAccount, 
                handleLogin, 
                handleSignout, 
                handleDeleteAccount, 
                handleEditAccount, 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
