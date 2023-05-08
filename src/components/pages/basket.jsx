import { ProductsList } from "components/Main/ProductsList/ProductsList";
import { useBasket } from "context/contectxtHooks"
import { useEffect, useState } from "react";
import {apiService} from "../../api/apiService";

export function Basket() {

    const basket = useBasket();
    const [shownGoods, setshownGoods] = useState([]);
    
    useEffect(()=> {
        basket.basket.map(id => {
            if(shownGoods.findIndex(product => product._id === id) === -1) {
                apiService.getproductById(id).then(
                    response => {
                        setshownGoods([...shownGoods, response]);
                    }
                );    
            };
        });
        
    }, [basket.basket, shownGoods]);

    return (
        <>
            <h1>Корзина товарів</h1>
            <ProductsList shownGoods={shownGoods}/>
        </>
        
    )
}