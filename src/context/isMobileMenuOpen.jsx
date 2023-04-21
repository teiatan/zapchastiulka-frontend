const { createContext, useState } = require("react");

export const IsMobileMenuOpenContext = createContext();

export const IsMobileMenuOpenContextProvider = ({children}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <IsMobileMenuOpenContext.Provider value={{isMobileMenuOpen, setIsMobileMenuOpen}}>
            {children}
        </IsMobileMenuOpenContext.Provider>
    )
};