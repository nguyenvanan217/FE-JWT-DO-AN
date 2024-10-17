import React, { useState } from 'react';
const UserContext = React.createContext({ name: '', auth: false });
function UserProvider({ children }) {
    const [user, setUser] = useState({
        isAuthenticated: false,
        token: '',
        email: '',
        account: {}
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

    return <UserContext.Provider value={{ user, loginContext, logout }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
