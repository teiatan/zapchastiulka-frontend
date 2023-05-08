import { useBasket } from "context/contectxtHooks";

export function BasketButtons({productId}) {

    const basket = useBasket();

    const addToBasket = (e) => {
        e.stopPropagation();
        e.preventDefault();
        basket.addToBasket(productId)
    };

    const deleteFromBasket = (e) => {
        e.stopPropagation();
        e.preventDefault();
        basket.removeFromBasket(productId);
    };

    return (
        <>
        {basket.isInBasket(productId) ?
        <button onClick={deleteFromBasket}>Видалити з корзини</button>:
        <button onClick={addToBasket}>Додати в корзину</button>
        }
        </>    
    )
}