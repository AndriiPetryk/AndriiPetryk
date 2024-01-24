import {
    AboutPageStyled,
    PhotoOfMe,
    WrapPhoto,
    AboutInfo,
    Bio,
    ScrollerContainer,
    DescribeMyself,
} from "../styles/about.styled"
import SectionSplitter from "./section-splitter"
import ScrollingText from "./scroll-text"
import {useFlag} from "feature-toggles-react-sdk"
import avatar from '../assets/avatar.png';

function AboutSection() {

    const about_me_ticker = useFlag('About-Section.my-interests-ticker')

    return (
        <AboutPageStyled id="about">
            <SectionSplitter name="About" side="right"/>
            <AboutInfo>
                <WrapPhoto>
                    <PhotoOfMe src={avatar} alt="me!"/>
                </WrapPhoto>
                <DescribeMyself>
                    <Bio>
                        My name is Andrii and I'm meticulous and analytical Senior Front-End Developer with 11+ years of
                        experience in developing and testing software, designing application architectures, and
                        optimizing processes, with excellent problem-solving skills and the ability to mentor.
                        Self-motivated, passionate about learning, and loves to learn new technologies. Proficient in
                        team collaboration, system performance testing, and developing custom library components. Highly
                        skilled in React, JavaScript, and Typescript.
                    </Bio>
                    {/*{ about_me_ticker ?*/}
                    {/*<ScrollerContainer>*/}
                    {/*    <h3>Interests</h3>*/}
                    {/*    <ScrollingText*/}
                    {/*    text="Computer Science &middot;"*/}
                    {/*    direction="toLeft"*/}
                    {/*    />*/}
                    {/*    <ScrollingText*/}
                    {/*    text="Finance & Global Economics &middot;"*/}
                    {/*    direction="toRight"*/}
                    {/*    />*/}
                    {/*    <ScrollingText*/}
                    {/*    text="Mathematics &middot;"*/}
                    {/*    direction="toLeft"*/}
                    {/*    />*/}
                    {/*    <ScrollingText*/}
                    {/*    text="Reading &middot;"*/}
                    {/*    direction="toRight"*/}
                    {/*    />*/}
                    {/*</ScrollerContainer> : null }*/}
                </DescribeMyself>
            </AboutInfo>
        </AboutPageStyled>
    )
}

export default AboutSection
