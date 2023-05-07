import { useBasket } from "context/contectxtHooks";

export function BasketButtons({productId}) {

    const basket = useBasket();

    return (
        <>
        {basket.isInBasket(productId) ?
        <button onClick={() => basket.removeFromBasket(productId)}>Додати в корзину</button>:
        <button onClick={() => basket.addToBasket(productId)}>Видалити з корзини</button>
        }
        </>    
    )
}