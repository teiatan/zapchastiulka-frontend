const { createContext, useState, useEffect } = require("react");

export const BasketContext = createContext();

export const BasketContextProvider = ({children}) => {
    const [basket, setBasket] = useState(() => JSON.parse(window.localStorage.getItem('basket')) ?? []);

    useEffect(()=> {
        window.localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (productId) => {
        const newBasket = [...basket, productId];
        setBasket(newBasket);
    };

    const removeFromBasket = (productId) => {
        const newBasket = basket.filter(id => id !== productId);
        setBasket(newBasket);
    };

    return (
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )
};