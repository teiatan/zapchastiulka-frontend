import { PriceFilter } from "components/Header/PriceFilter/PriceFilter";
import { Div } from "./FilterDropdown.styled";
import { Categories } from "components/Header/Categories/Categories";


export function FilterDropdown() {
    return (
        <Div>
            <h2>Filter</h2>
            <PriceFilter />
            <Categories />
        </Div>
    )
}