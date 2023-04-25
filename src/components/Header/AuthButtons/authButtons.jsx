import { Button } from "../ThemeSwitcher/ThemeSwitcher.styled"
import { useTheme } from "@emotion/react";
import { useIsLoggedIn, useIsMobileMenuOpened } from "context/contectxtHooks";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { HeaderSpan } from "../Header.styled";

export function AuthButtons() {

    const theme = useTheme();
    const isLoggedIn = useIsLoggedIn();
    const closeMobileMenu = useIsMobileMenuOpened().setIsMobileMenuOpen;

    const signIn = () => {
        isLoggedIn.setIsLoggedIn(true);
        closeMobileMenu(false);
    };

    const signOut = () => {
        isLoggedIn.setIsLoggedIn(false);
        closeMobileMenu(false);
    };

    return(
        <>  
            {isLoggedIn.isLoggedIn ? 
            <Button onClick={signOut}>
                <VscSignOut color={theme.header.textColor} size={30}/>
                <HeaderSpan>Вийти з облікового запису</HeaderSpan>
            </Button>
            :
            <Button onClick={signIn}>
                <VscSignIn color={theme.header.textColor} size={30} />
                <HeaderSpan>Ввійти в обліковий запис</HeaderSpan>
            </Button>
            }  
        </>
    )
}