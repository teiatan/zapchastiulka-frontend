import { PageContainer } from "components/pageContainer/pageContainer";
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