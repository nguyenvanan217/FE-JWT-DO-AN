import React, { useEffect, useState } from 'react';
import { getUserAccount } from '../services/userService';
const UserContext = React.createContext(null);
function UserProvider({ children }) {
    const [user, setUser] = useState({
        isAuthenticated: false,
        token: '',
        email: '',
        account: {},
    });

    // Login updates the user data with a name parameter
    const loginContext = (userData) => {
        setUser(userData);
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
        }));
    };

    const fetchUser = async () => {
        let data = await getUserAccount();
    };
    useEffect(() => {
        fetchUser();
    }, []);
    return <UserContext.Provider value={{ user, loginContext, logout }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
