const { createContext, useState } = require("react");

export const BasketContext = createContext();

export const BasketContextProvider = ({children}) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (productId) => {
        setBasket(prev => prev.push(productId));
    };

    const removeFromBasket = (productId) => {
        setBasket(prev => prev.filter(id => id !== productId));
    };

    return (
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )
};