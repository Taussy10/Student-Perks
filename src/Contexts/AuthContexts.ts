import React,{useState , useEffect , useContext, createContext} from "react";


const AuthContext = createContext()
// state a varialbe for the context 

export function name() {
    console.log("hello");
    
}

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    };

    return (
        <AuthContext.Provider value={/* your context value here */}>
            {props.children}
        </AuthContext.Provider>
    );
}

