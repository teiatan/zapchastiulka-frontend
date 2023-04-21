import { GalleryProducts } from "components/Main/GalleryProducts/GalleryProducts";
import { Pagination } from "components/pagination/Pagination";
import { useEffect, useState } from "react";
import { goods } from "data/goods";
import { useSearch } from "context/contectxtHooks";

export function GoodsList() {
    
    const search = useSearch().search;
    const perPage = 12;
    const [allGoods, setAllGoods] = useState(goods);
    const [shownGoods, setShownGoods] = useState(allGoods.slice(0, perPage));
    
    useEffect(()=>{
        const filteredGoodsArray = goods.filter(goodsItem => goodsItem.name.toLowerCase().includes(search));
        setAllGoods(filteredGoodsArray);
        setShownGoods(filteredGoodsArray.slice(0, perPage));
    }, [search]);
        
    const giveCuttedArray = (array) => {
    setShownGoods(array);
    };

    return (
    <>
        <GalleryProducts shownGoods={shownGoods}/>
        <Pagination
            perPage={perPage}
            array={allGoods}
            giveCuttedArray={giveCuttedArray}
        />
    </>
        
    )
}