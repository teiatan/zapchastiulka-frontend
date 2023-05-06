import { IsLoggedInContextProvider } from "./isLoggedIn";
import { IsMobileMenuOpenContextProvider } from "./isMobileMenuOpen";
import { SearchContextProvider } from "./search";
import { ThemeContextProvider } from "./theme";
import { IsLoadingContextProvider } from "./isLoading";
import { BasketContextProvider } from "./basket";

export function ContextProvider({children}) {
    return(
        <ThemeContextProvider>
            <SearchContextProvider>
                <IsLoggedInContextProvider>
                    <IsMobileMenuOpenContextProvider>
                        <IsLoadingContextProvider>
                            <BasketContextProvider>
                                {children}
                            </BasketContextProvider>
                        </IsLoadingContextProvider>
                    </IsMobileMenuOpenContextProvider>
                </IsLoggedInContextProvider>
            </SearchContextProvider>
        </ThemeContextProvider>
    )
}