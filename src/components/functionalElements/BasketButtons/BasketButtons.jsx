import { useBasket } from "context/contectxtHooks";

export function BasketButtons({productId}) {

    const basket = useBasket();

    const addToBasket = () => {
        basket.addToBasket(productId);
    };

    const removeFromBasket = () => {
        basket.removeFromBasket(productId);
    };

    return (
        <>
        {basket.isInBasket(productId) ?
        <button onClick={removeFromBasket}>Remove from basket</button>:
        <button onClick={addToBasket}>Add to basket</button>
        }
        </>    
    )
}