import { PageContainer } from "components/Header/PageContainer/PageContainer.jsx";
import { MainStyle } from "./Main.styled";

export function Main({children}){
    return ( 
        <MainStyle>
            <PageContainer>
               {children} 
            </PageContainer>
        </MainStyle>
    )
};