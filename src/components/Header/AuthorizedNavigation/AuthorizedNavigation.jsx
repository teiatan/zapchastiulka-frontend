import { Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { HeaderSpan } from "../Header.styled";
import { useIsMobileMenuOpened } from "context/contectxtHooks";
import { useTheme } from "@emotion/react";

export function AuthorizedNavigation() {
    const mobileMenuContext = useIsMobileMenuOpened();
    const theme = useTheme ();

    return(
        <>
            <Link 
                to={"/basket"}
                onClick={()=>mobileMenuContext.setIsMobileMenuOpen(false)}
            > 
                <SlBasket color={theme.header.textColor} size={30}/>
                <HeaderSpan>Корзина</HeaderSpan>
            </Link>

            {/* <Link 
                onClick={()=>mobileMenuContext.setIsMobileMenuOpen(false)}
                to={"/profile"}
            >
                <RxPerson color={theme.header.textColor} size={30} />
                <HeaderSpan>Особистий кабінет</HeaderSpan>
            </Link> */}
            
            <Link 
                onClick={()=>mobileMenuContext.setIsMobileMenuOpen(false)}
                to={"/admin"}
            >
                <RxPerson color={theme.header.textColor} size={30} />
                <HeaderSpan>Адміністрування</HeaderSpan>
            </Link>
        </>
    )
}