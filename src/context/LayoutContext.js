import { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem('auth') === 'true' ? true : false);

    const login = () => {
        setAuth(true);
        localStorage.setItem('auth', true);
    };

    return <LayoutContext.Provider value={{ auth, setAuth, login }}>{children}</LayoutContext.Provider>;
};
