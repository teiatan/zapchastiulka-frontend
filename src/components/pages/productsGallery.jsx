import { ProductsList } from "components/Main/ProductsList/ProductsList";
//import { Pagination } from "components/pagination/Pagination";
import { useEffect, useState } from "react";
//import { goods } from "data/goods";
import { useIsLoading, useSearch } from "context/contectxtHooks";
import { apiService } from "api/apiService";

export function ProductsGallery() {
    const isLoading = useIsLoading().setIsLoading;
    const search = useSearch().search;
    //const perPage = 12;
    const [allGoods, setAllGoods] = useState([]);
    //const [shownGoods, setShownGoods] = useState(allGoods.slice(0, perPage));
    
    useEffect(()=>{
        isLoading(true);
        apiService.getAllProducts().then(
            response => {
                setAllGoods(response);
                isLoading(false);
            }
        );

        /* const filteredGoodsArray = goods.filter(goodsItem => goodsItem.name.toLowerCase().includes(search));
        setAllGoods(filteredGoodsArray);
        setShownGoods(filteredGoodsArray.slice(0, perPage)); */
    }, [search, isLoading]);
        
    /* const giveCuttedArray = (array) => {
    setShownGoods(array);
    }; */

    return (
    <>
        <ProductsList shownGoods={allGoods}/>
        {/* <Pagination
            perPage={perPage}
            array={allGoods}
            giveCuttedArray={giveCuttedArray}
        /> */}
    </>
        
    )
}