import { IsLoggedInContextProvider } from "./isLoggedIn";
import { IsMobileMenuOpenContextProvider } from "./isMobileMenuOpen";
import { SearchContextProvider } from "./search";
import { ThemeContextProvider } from "./theme";

export function ContextProvider({children}) {
    return(
        <ThemeContextProvider>
            <SearchContextProvider>
                <IsLoggedInContextProvider>
                    <IsMobileMenuOpenContextProvider>
                        {children} 
                    </IsMobileMenuOpenContextProvider>
                </IsLoggedInContextProvider>
            </SearchContextProvider>
        </ThemeContextProvider>
    )
}