const { createContext, useState } = require("react");

export const BasketContext = createContext();

export const BasketContextProvider = ({children}) => {
    const [basket, setBasket] = useState(() => JSON.parse(window.localStorage.getItem('basket')) ?? []);

    const addToBasket = (productId) => {
        setBasket(prev => prev.push(productId));
        window.localStorage.setItem('basket', JSON.stringify(basket));
    };

    const removeFromBasket = (productId) => {
        setBasket(prev => prev.filter(id => id !== productId));
        window.localStorage.setItem('basket', JSON.stringify(basket));
    };

    return (
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )
};