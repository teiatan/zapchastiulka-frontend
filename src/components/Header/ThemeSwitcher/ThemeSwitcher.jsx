import PropTypes from 'prop-types';
import { Button } from "./ThemeSwitcher.styled";
import { BsSun } from 'react-icons/bs';
import { useTheme } from '@emotion/react';
import { useIsMobileMenuOpened, useThemeColors } from 'context/contectxtHooks';
import { HeaderSpan } from '../Header.styled';

export function ThemeSwitcher() {
    const changeTheme = useThemeColors().changeTheme;
    const theme = useTheme();
    const closeMobileMenu = useIsMobileMenuOpened().setIsMobileMenuOpen;

    const onClick = () => {
        changeTheme();
        closeMobileMenu(false);
    };

    return (
        <Button onClick={onClick}>
            <BsSun color={theme.header.textColor} size={30}/>
            <HeaderSpan>Змінити тему</HeaderSpan>
        </Button>
    );
};

ThemeSwitcher.propTypes = {
    themeSwitcher: PropTypes.func,
};