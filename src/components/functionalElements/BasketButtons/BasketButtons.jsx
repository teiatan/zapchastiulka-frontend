import { useState } from "react"

export function BasketButtons({id}) {

    const [isInBasket, setIsInBasket] = useState(true);


    return (
        <>
        {isInBasket ?
        <button>Add to basket</button>:
        <button>Remove from basket</button>}
        </>    
    )
}