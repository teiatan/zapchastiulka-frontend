import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { useThemeColors } from "context/contectxtHooks";

export function Layout() {
    
    const theme = useThemeColors().theme;

    return (
        <ThemeProvider theme={theme}>
            <Header />

            <Main>
                <Outlet />
            </Main>
        
            <Footer />
        </ThemeProvider>
    )
}