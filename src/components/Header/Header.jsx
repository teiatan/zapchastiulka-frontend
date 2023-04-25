import { HeaderTag, CoverDiv, MobileMenuContainer, MobileMenuInsideContainer } from "./Header.styled";
import { PageContainer } from "components/Header/PageContainer/PageContainer.jsx";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
// import { AuthButtons } from "./AuthButtons/authButtons";
import { useIsLoggedIn, useIsMobileMenuOpened } from "context/contectxtHooks";
import { useEffect, useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton/MobileMenuButton";
import { AuthorizedNavigation } from "./AuthorizedNavigation/AuthorizedNavigation";
import { Filter } from "./Filter/Filter";

export function Header() {
    const mobileMenuContext = useIsMobileMenuOpened();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(mobileMenuContext);
    const isLoggedIn = useIsLoggedIn().isLoggedIn;

    useEffect(()=>{
        setIsMobileMenuOpen(mobileMenuContext.isMobileMenuOpen);
    }, [mobileMenuContext.isMobileMenuOpen]); 

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>

                    <Logo />

                    <SearchForm />

                    <MobileMenuButton />
                    
                    <MobileMenuContainer {...(isMobileMenuOpen && {style: {display:"block"}})}>
                        <MobileMenuInsideContainer>

                            {isLoggedIn && <AuthorizedNavigation />}

                            <ThemeSwitcher/>

                            <Filter />

                            {/* <AuthButtons /> */}

                        </MobileMenuInsideContainer>                    
                    </MobileMenuContainer>

                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};