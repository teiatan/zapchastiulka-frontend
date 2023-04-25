import { TfiFilter } from "react-icons/tfi";
import { useTheme } from "@emotion/react";
import { Button } from "../ThemeSwitcher/ThemeSwitcher.styled";
import { useIsMobileMenuOpened } from "context/contectxtHooks";
import { HeaderSpan } from "../Header.styled";
import { FilterDropdown } from "../FilterDropdown/FilterDropdown";
import { useState } from "react";

export function Filter() {
    const mobileMenuContext = useIsMobileMenuOpened();
    const theme = useTheme();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (<>
        <Button onClick={()=>{mobileMenuContext.setIsMobileMenuOpen(false); setIsFilterOpen(!isFilterOpen)}}>
            <TfiFilter color={theme.header.textColor} size={25}/>
            <HeaderSpan> Фільтр</HeaderSpan>
        </Button>
        {isFilterOpen && <FilterDropdown setIsFilterOpen={setIsFilterOpen}/>}
        </>)
}