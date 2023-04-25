import { PriceFilter } from "components/Header/PriceFilter/PriceFilter";
import { Div } from "./Filter.styled";
import { Categories } from "components/Header/Categories/Categories";


export function Filter() {
    return (
        <Div>
            <h2>Filter</h2>
            <PriceFilter />
            <Categories />
        </Div>
    )
}