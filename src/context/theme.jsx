import { createContext, useState, useEffect } from "react";
import { dark, light } from "utils/theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

    const [type, setType] = useState(() => window.localStorage.getItem('theme') ?? 'light');
    const [theme, setTheme] = useState(light);

    useEffect(() => {
        window.localStorage.theme = type;
        if(type==="light") {
            setTheme(light);
        } else if(type === 'dark') {
            setTheme(dark);
        };
    }, [type]);

    const changeTheme = () => {
        if(type === 'light') {
            setType('dark');   
        } else if(type === 'dark') {
            setType('light'); 
        };
    };

    return (
        <ThemeContext.Provider value ={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};