import { useBasket } from "context/contectxtHooks";

export function BasketButtons({productId}) {

    const basket = useBasket();

    return (
        <>
        {basket.isInBasket(productId) ?
        <button onClick={() => basket.removeFromBasket(productId)}>Remove from basket</button>:
        <button onClick={() => basket.addToBasket(productId)}>Add to basket</button>
        }
        </>    
    )
}