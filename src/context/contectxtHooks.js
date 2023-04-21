import { useContext } from "react";
import { ThemeContext } from "./theme";
import { SearchContext } from "./search";
import { IsLoggedInContext } from "./isLoggedIn";
import { IsMobileMenuOpenContext } from "./isMobileMenuOpen";


export const useThemeColors = () => useContext(ThemeContext);

export const useSearch = () => useContext(SearchContext);

export const useIsLoggedIn = () => useContext(IsLoggedInContext);

export const useIsMobileMenuOpened = () => useContext(IsMobileMenuOpenContext);