const { createContext, useState } = require("react");

export const IsLoggedInContext = createContext();

export const IsLoggedInContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </IsLoggedInContext.Provider>
    )
};