import { HeaderTag, CoverDiv, MobileMenuContainer, MobileMenuInsideContainer, HeaderSpan } from "./Header.styled";
import { PageContainer } from "components/PageContainer/PageContainer";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { FiMenu } from "react-icons/fi";
import { TfiFilter, TfiClose } from "react-icons/tfi";
import { RxPerson } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Button } from "./ThemeSwitcher/ThemeSwitcher.styled";
import { useTheme } from "@emotion/react";
import { AuthButtons } from "./AuthButtons/authButtons";
import { useIsLoggedIn, useIsMobileMenuOpened } from "context/contectxtHooks";
import { useEffect, useState } from "react";
import { Filter } from "./Filter/Filter";
import { MobileMenuButton } from "./MobileMenuButton/MobileMenuButton";

export function Header() {
    const mobileMenuContext = useIsMobileMenuOpened();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(mobileMenuContext);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const theme = useTheme();
    const isLoggedIn = useIsLoggedIn().isLoggedIn;

    useEffect(()=>{
        setIsMobileMenuOpen(mobileMenuContext.isMobileMenuOpen);
    }, [mobileMenuContext.isMobileMenuOpen]);

    const onClickMobileMenu = () => {
        mobileMenuContext.setIsMobileMenuOpen(!isMobileMenuOpen);
    };  

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>

                    <Logo />

                    <SearchForm />

                    <MobileMenuButton />
                    
                    <MobileMenuContainer {...(isMobileMenuOpen && {style: {display:"block"}})}>
                        <MobileMenuInsideContainer>
                            {isLoggedIn &&
                                <>
                                    <Link 
                                        to={"/basket"}
                                        onClick={()=>mobileMenuContext.setIsMobileMenuOpen(false)}
                                    > 
                                        <SlBasket color={theme.header.textColor} size={30}/>
                                        <HeaderSpan>Корзина</HeaderSpan>
                                    </Link>
                                    <Link 
                                        onClick={()=>mobileMenuContext.setIsMobileMenuOpen(false)}
                                        to={"/profile"}
                                    >
                                        <RxPerson color={theme.header.textColor} size={30} />
                                        <HeaderSpan>Особистий кабінет</HeaderSpan>
                                    </Link>
                                </>
                            }
                            <ThemeSwitcher/>
                            <Button onClick={()=>{mobileMenuContext.setIsMobileMenuOpen(false); setIsFilterOpen(!isFilterOpen)}}>
                                <TfiFilter color={theme.header.textColor} size={25}/>
                                <HeaderSpan> Фільтр</HeaderSpan>
                            </Button>
                            <AuthButtons />    
                        </MobileMenuInsideContainer>                    
                    </MobileMenuContainer>
                    {isFilterOpen && <Filter setIsFilterOpen={setIsFilterOpen}/>}
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};