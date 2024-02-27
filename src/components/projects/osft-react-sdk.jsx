import {
    BuiltWithIcons,
    IndividualProject,
    ProjectDescription,
    ProjectDetails,
    ProjectLink,
    ProjectLinks,
    ProjectMainTitle,
    ProjectSubtitle,
    ThinColumn,
    BuiltWith,
} from "../../styles/projects.styled";
import { useFlag } from "feature-toggles-react-sdk"
import CodeExample from "./code-example";
import TechStackIcon from "./tech-stack-icon";
import javascript_svg from "../../assets/javascript.svg"
import react_svg from '../../assets/react.svg'
import npm_svg from '../../assets/npm.svg'
import vite_svg from '../../assets/vite.svg'
import babel_svg from '../../assets/babel.svg'
import typescript_svg from '../../assets/typescript.svg'
import dash1 from "../../assets/dash-1.png";
import ProjectVideoDemo from "./osft-video.jsx";

import eshop from '../../assets/e-shop1.png';
import mongodb_svg from "../../assets/mongodb.svg";
import chartjs from "../../assets/chartjs.svg";
import nodejs_svg from "../../assets/nodejs.svg";
import express_svg from "../../assets/express.svg";

function OSFTReactSDK () {

    const useTypeScriptIcon = useFlag('projects.osft-reactSDK-typescript')

    return (
        <IndividualProject>
            <ThinColumn>
                <ProjectDetails>
                    <ProjectSubtitle>
                        E-shop
                    </ProjectSubtitle>
                    <ProjectDescription>
                        The Internet Shop was crafted to fulfill the client's objective of creating a seamless e-commerce experience for different products.
                        As a React developer, I played a pivotal role in designing and implementing a user-friendly interface, ensuring a smooth shopping journey from product selection to checkout.
                        Leveraging React's state management, I optimized the application for high performance and responsiveness.
                        The project's success is evident in increased sales, positive user reviews, and enhanced user engagement.
                        The Internet Shop stands as a sophisticated, visually appealing platform that successfully meets the client's goals and customer expectations.
                    </ProjectDescription>
                    <BuiltWith>
                        Built With
                    </BuiltWith>
                    <BuiltWithIcons>
                        <TechStackIcon icon={javascript_svg} name='JavaScript'/>
                        <TechStackIcon icon={mongodb_svg} name="MongoDB"/>
                        <TechStackIcon icon={nodejs_svg} name="NodeJS"/>
                        <TechStackIcon icon={express_svg} name="ExpressJS"/>
                        <TechStackIcon icon={react_svg} name='React'/>
                        <TechStackIcon icon={babel_svg} name='Babel'/>
                    </BuiltWithIcons>
                    <ProjectLinks>
                        <ProjectLink target="_blank" href="https://proshop-e-market.onrender.com">E-shop</ProjectLink>
                        <ProjectLink target="_blank" href="https://github.com/AndriiPetryk/proshop-e-market">View Source Code</ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
            </ThinColumn>
            <ProjectVideoDemo
                watch_url={eshop}
            />
        </IndividualProject>
    )
}

export default OSFTReactSDK
