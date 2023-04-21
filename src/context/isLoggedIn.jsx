const { createContext, useState } = require("react");

export const IsLoggedInContext = createContext();

export const IsLoggedInContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </IsLoggedInContext.Provider>
    )
};