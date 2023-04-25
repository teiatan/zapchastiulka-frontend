import { PageContainer } from "components/PageContainer/PageContainer";
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