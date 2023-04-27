import { apiService } from "api/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function ProductDetails() {
    const [productData, setProductData] = useState({});
    const { productId } = useParams();

    useEffect(()=>{
        apiService.getproductById(productId).then(
          response => setProductData(response)
        );
    }, [productId]);

    console.log(productData);

    return(
        <>
            <p>Product details page</p>
            <p>{productData.name}</p>
        </>
        
    )
};