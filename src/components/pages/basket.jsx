import { ProductsList } from "components/Main/ProductsList/ProductsList";
import { useBasket } from "context/contectxtHooks"
import { useEffect, useRef, useState } from "react";
import {apiService} from "../../api/apiService";

export function Basket() {

    const basket = useBasket();
    const [shownGoods, setshownGoods] = useState([]);
    const sumPrice = useRef(0);

    useEffect(()=> {
        /* basket.basket.map(id => {
            if(shownGoods.findIndex(product => product._id === id) === -1) {
                apiService.getproductById(id).then(
                    response => {
                        console.log('get');
                        setshownGoods([...shownGoods, response]);
                    }
                );    
            };
        }); */
        basket.basket.forEach(id => {
            if(shownGoods.findIndex(product => product._id === id) === -1) {
                apiService.getproductById(id).then(
                    response => {
                        console.log('get');
                        setshownGoods([...shownGoods, response]);
                    }
                );    
            };
        });
        sumPrice.current = shownGoods.reduce((sum, product) => sum + product.price, 0);
    }, [basket.basket, shownGoods]);

    return (
        <>
            <h1>Корзина товарів</h1>
            <ProductsList shownGoods={shownGoods}/>
            <p>Сума замовлення: {sumPrice.current}</p>
        </>
        
    )
}