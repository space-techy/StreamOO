import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const login = (token) => {
        setUser(true);
        localStorage.setItem("token", token);
    }

    const logout = () => {
        setUser(false);
        localStorage.removeItem("token");
    }

    useEffect(() => {
        const checkUser = localStorage.getItem("token");
        if (checkUser) {
            setUser(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };