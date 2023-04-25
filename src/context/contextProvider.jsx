import { IsLoggedInContextProvider } from "./isLoggedIn";
import { IsMobileMenuOpenContextProvider } from "./isMobileMenuOpen";
import { SearchContextProvider } from "./search";
import { ThemeContextProvider } from "./theme";
import { IsLoadingContextProvider } from "./isLoading";

export function ContextProvider({children}) {
    return(
        <ThemeContextProvider>
            <SearchContextProvider>
                <IsLoggedInContextProvider>
                    <IsMobileMenuOpenContextProvider>
                        <IsLoadingContextProvider>
                            {children} 
                        </IsLoadingContextProvider>
                    </IsMobileMenuOpenContextProvider>
                </IsLoggedInContextProvider>
            </SearchContextProvider>
        </ThemeContextProvider>
    )
}