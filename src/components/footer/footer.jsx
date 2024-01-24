import LineOnlySplitter from "../line-only-splitter";
import { 
    FooterStyled, 
    FooterMessage, 
} from "../../styles/footer.styled";

function Footer () {
    return (
        <FooterStyled>
            <LineOnlySplitter />
            <FooterMessage>
                Andrii Petryk 
                · { new Date().getFullYear() }
            </FooterMessage>
        </FooterStyled>
    )
}

export default Footer
