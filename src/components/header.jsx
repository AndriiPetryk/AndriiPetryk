import {
    HeaderStyled,
    Name,
    NavBar,
    NavItem,
    // NavLink,
} from "../styles/header.styled"
import useWindowSize from '../hooks/useWindowSize';
import resume from "../assets/Andrii Petryk Resume.pdf";

function Header () {

    const screenSize = useWindowSize()

    return (
        screenSize.width > 700 ? <HeaderStyled>
            <Name>Andrii Petryk</Name>
            <NavBar>
                <NavItem href="#about">ABOUT</NavItem>
                <NavItem href="#projects">PROJECTS</NavItem>
                <NavItem href="#contact">CONTACT</NavItem>
                 <NavItem href={resume} target="_blank">RESUME</NavItem>
            </NavBar>
        </HeaderStyled>
        : <HeaderStyled>
            <Name>Andrii Petryk</Name>
            <NavBar>
                <NavItem href={resume} target="_blank">RESUME</NavItem>
            </NavBar>
        </HeaderStyled>
    )
}

export default Header
