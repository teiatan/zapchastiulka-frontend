
import { useEffect, useState } from "react";
import { Button, Div } from "./Pagination.styled";

export function Pagination ({perPage, array, giveCuttedArray}) {
    const [paginationArray, setPaginationArray] = useState([]);
    const [totalPages, setTotalPages] = useState(Math.ceil(array.length/perPage));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        setTotalPages(Math.ceil(array.length/perPage));
    }, [array.length, perPage]);

    useEffect(()=>{
        let pag = 0;
        let pagarray = [];
        while(pag < totalPages) {
            pag +=1;
            pagarray.push(pag);
        }; 
        setPaginationArray(pagarray);
    }, [totalPages])
        
    
    const onClick = (e) => {
        let page;
        switch(e.target.name){
            case "prevButton":
                page = currentPage - 1;
                console.log(page);
                break;
            case "nextButton":
                page = currentPage + 1;
                console.log(page);
                break;
            case "pageButton":
                page = Number(e.target.textContent);
                break;
            default: 
                return;
        };
        setCurrentPage(page);
        const from = (page-1+(perPage-1)*(page-1));
        const to = (page-1 + perPage + (perPage-1)*(page-1));
        const cuttedArray = array.slice(from, to);
        giveCuttedArray(cuttedArray);
        window.scrollTo(0,0);   
    };

    return (<>
        {totalPages > 1 &&
        <Div>
            <Button 
                type="button" name="prevButton"
                {...(currentPage===1 ? {disabled: true} : {onClick: onClick})}
            >Prev</Button>
            {paginationArray.map(pag => {
                return (
                    <div key={pag}>
                        <Button 
                            type="button" name="pageButton"
                            {...(currentPage===pag ? {disabled: true} : {onClick: onClick})}
                        >{pag}</Button>
                    </div>
                );
            })}
            <Button 
                type="button" name="nextButton"
                {...(currentPage===totalPages ? {disabled: true} : {onClick: onClick})}
            >Next</Button>
        </Div>
        }
    </>);
};