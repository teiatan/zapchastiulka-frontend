import { useBasket } from "context/contectxtHooks"

export function Basket() {

    const basket = useBasket();

    return (
        <>
            <h1>Корзина товарів</h1>
            <p>ID товарів: {basket.basket}</p>
        </>
        
    )
}