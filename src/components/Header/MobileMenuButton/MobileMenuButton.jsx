import { useEffect, useState } from "react";
import { useIsMobileMenuOpened } from "context/contectxtHooks";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useTheme } from "@emotion/react";
import { Button } from "./MobileMenuButton.styled";

export function MobileMenuButton() {
    const mobileMenuContext = useIsMobileMenuOpened();
    const theme = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(mobileMenuContext);

    useEffect(()=>{
        setIsMobileMenuOpen(mobileMenuContext.isMobileMenuOpen);
    }, [mobileMenuContext.isMobileMenuOpen]);

    const onClickMobileMenu = () => {
        mobileMenuContext.setIsMobileMenuOpen(!isMobileMenuOpen);
    }; 

    return (
        <Button onClick={onClickMobileMenu}>
            <FiMenu 
                className={(!isMobileMenuOpen ? 'isVisible' : 'isHidden')}
                color={theme.header.textColor} size={30}
            />
            <TfiClose 
                className={(!isMobileMenuOpen ? 'isHidden' : 'isVisible')}
                color={theme.header.textColor} size={30}
            />
        </Button>
    )
} 