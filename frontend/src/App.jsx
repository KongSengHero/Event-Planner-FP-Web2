import { Routes, Route, Navigate } from 'react-router-dom'; 

// Context ────────────────────────────────────────────────────────────────────── 
import { AuthProvider, useAuth } from './context/AuthContext'; 
import { EventProvider } from './context/EventContext'; 

// Pages ────────────────────────────────────────────────────────────────────── 
import Login from './Login'; 
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard'; 
import GlobalEvent from './pages/GlobalEvent'; 
import Contact from './pages/Contact'; 
import About from './pages/About'; 

// Components ────────────────────────────────────────────────────────────────────── 
import NavigationHeader from './components/NavigationHeader'; 
import Loading from './components/Loading'; 







function GuestRoute({ children }) { 
    const { user } = useAuth(); 
    return user ? <Navigate to="/home" replace /> : children; 
}

function ProtectedRoute({ children }) { 
    const { user } = useAuth(); 
    return user ? children : <Navigate to="/" replace />; 
}

function Router() { 
    const { loading } = useAuth(); 
    
    if (loading) return <Loading />
    
    return ( 
        <>
            <NavigationHeader />
            <Routes>
                <Route path="/"             element={ <GuestRoute> <Login /> </GuestRoute> } />
                <Route path="/home"         element={ <ProtectedRoute> <Home />         </ProtectedRoute> } />
                <Route path="/global_event" element={ <ProtectedRoute> <GlobalEvent />  </ProtectedRoute> } />
                <Route path="/dashboard"    element={ <ProtectedRoute> <Dashboard />    </ProtectedRoute> } />
                <Route path="/contact"      element={ <ProtectedRoute> <Contact />      </ProtectedRoute> } />
                <Route path="/about"        element={ <ProtectedRoute> <About />        </ProtectedRoute> } />
                <Route path='*'             element={ 
                    <div className="z-50 fixed inset-0 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm text-white">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-xl font-bold mt-4">No Page Found...</h2>
                        </div>
                    </div>
                } />
            </Routes>
        </>
    )
}

export default function App() { 
    return ( 
        <AuthProvider>
            <EventProvider>
                <Router />
            </EventProvider>
        </AuthProvider>
    )
}