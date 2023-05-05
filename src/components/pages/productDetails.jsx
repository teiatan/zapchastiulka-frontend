import { apiService } from "api/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function ProductDetails() {
    const [productData, setProductData] = useState({});
    const { productId } = useParams();
    const [imageNumber] = useState(0);

    useEffect(()=>{
        apiService.getproductById(productId).then(
          response => setProductData(response)
        );
    }, [productId]);

    console.log(productData);
const {name, availability, manufactureId, photo, manufacturer, price, units, _id} = productData;
    return(
        <>
            <p>Product details page</p>
            <p>{name}</p>
            <p>{availability}</p>
            <p>Артикул: {manufactureId}</p>
            {photo && <img src={photo[imageNumber]?.url} alt={photo[imageNumber].alt}></img>}
            <div>
                <h3>Виробник</h3>
                {manufacturer.country && <p>Країна {manufacturer.country}</p>}
                {manufacturer.factory && <p>Завод {manufacturer.factory}</p>}
                {manufacturer.trademark && <p>Торгова марка {manufacturer.trademark}</p>}
            </div>
            <div>
                {price} грн/{units}
            </div>
            <p>Унікальний номер товару: {_id}</p>
        </>
        
    )
};