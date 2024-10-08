import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ username, setName] = useState('');
    const [user, setUser] = useState(false);

    const login = ( token, name) => {
        setUser(true);
        setName(name);
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
    }

    const logout = () => {
        setUser(false);
        localStorage.removeItem("token");
    }

    useEffect(() => {
        const checkUser = localStorage.getItem("token");
        const checkName = localStorage.getItem("name");
        if (checkUser) {
            setUser(true);
            setUser(checkName);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };