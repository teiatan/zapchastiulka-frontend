import { apiService } from "api/apiService";
import { useIsLoading } from "context/contectxtHooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasketButtons } from "../functionalElements/BasketButtons/BasketButtons";


export function ProductDetails() {
    const [productData, setProductData] = useState({});
    const { productId } = useParams();
    const [imageNumber] = useState(0);
    const isLoading = useIsLoading().setIsLoading;

    useEffect(()=>{
        isLoading(true);
        apiService.getproductById(productId).then(
          response => {
            setProductData(response)
            isLoading(false);
          }
        );
    }, [productId, isLoading]);

    const {name, availability, manufactureId, photo, manufacturer, price, units, _id} = productData;
    
    return(
        <>
            <h1>{name}</h1>
            <p>{availability}</p>
            <p>Артикул: {manufactureId}</p>
            <div>
                {price} грн/{units}
            </div>
            {photo && <img src={photo[imageNumber]?.url} alt={photo[imageNumber].alt}></img>}
            <BasketButtons />
            <div>
                <h3>Виробник</h3>
                {manufacturer?.country && <p>Країна {manufacturer.country}</p>}
                {manufacturer?.factory && <p>Завод {manufacturer.factory}</p>}
                {manufacturer?.trademark && <p>Торгова марка {manufacturer.trademark}</p>}
            </div>
            <p>Унікальний номер товару: {_id}</p>
        </>
        
    )
};