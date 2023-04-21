import { FooterTag, AddressTag } from "./Footer.styled";
import { PageContainer } from "components/pageContainer/pageContainer";

export function Footer() {
    return (
        <FooterTag>
            <PageContainer>
                <AddressTag>
                    <p>Працюємо щодня з 10:00 до 18:00 </p>
                    <a href="tel:+380441234567">+38 (044) 123-45-67</a>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                    {/* <ul>соцмережі</ul> */}
                </AddressTag>
            </PageContainer>
        </FooterTag>
    );
};