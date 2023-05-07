import { useBasket } from "context/contectxtHooks";
import { useEffect, useState } from "react"

export function BasketButtons({productId}) {
    const [isInBasket, setIsInBasket] = useState(false);

    const basket = useBasket();

    useEffect(()=> {
        setIsInBasket(basket.basket.includes(productId));
    }, [basket.basket, productId])

    const addToBasket = () => {
        basket.addToBasket(productId);
    };

    const removeFromBasket = () => {
        basket.removeFromBasket(productId);
    };

    return (
        <>
        {isInBasket ?
        <button onClick={removeFromBasket}>Remove from basket</button>:
        <button onClick={addToBasket}>Add to basket</button>
        }
        </>    
    )
}