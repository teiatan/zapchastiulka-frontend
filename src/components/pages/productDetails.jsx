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

    console.log(productData.photo[0]);
const {name, availability, manufactureId, photo} = productData;
    return(
        <>
            <p>Product details page</p>
            <p>{name}</p>
            <p>{availability}</p>
            <p>Артикул: {manufactureId}</p>
            <img src={photo[imageNumber]?.url} alt={photo[imageNumber].alt}></img>
        </>
        
    )
};