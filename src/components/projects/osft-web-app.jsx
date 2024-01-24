import {
    IndividualProject,
    ProjectDetails,
    ProjectTitles,
    ProjectMainTitle,
    ProjectSubtitle,
    ProjectDescription,
    BuiltWithIcons,
    ProjectLink,
    ProjectLinks,
    ThinColumn,
    BuiltWith,
} from "../../styles/projects.styled"
import TechStackIcon from "./tech-stack-icon"
import ProjectVideoDemo from "./osft-video"
import express_svg from "../../assets/express.svg"
import javascript_svg from "../../assets/javascript.svg"
import mongodb_svg from "../../assets/mongodb.svg"
import nodejs_svg from "../../assets/nodejs.svg"
import react_svg from "../../assets/react.svg"
import dash1 from '../../assets/dash-1.png'

function OSFTWebApp () {
    return (
        <IndividualProject id="osft">
            <ThinColumn>
                <ProjectDetails>
                    <ProjectTitles>
                        <ProjectMainTitle>
                            React admin dashboard
                        </ProjectMainTitle>
                        <ProjectSubtitle>
                            MERN stack application
                        </ProjectSubtitle>
                    </ProjectTitles>
                    <ProjectDescription>
                        The React Admin Dashboard was developed to meet the client's goal of creating a comprehensive data management platform with dynamic Charts and Tables. As a React developer, my contributions included designing and implementing the user interface, integrating interactive Charts for insightful data visualization, and creating responsive Tables for efficient data representation. Leveraging React's capabilities, I ensured a seamless user experience and efficient data handling. The project's success is evident in improved data analysis, streamlined workflows, and positive user feedback, showcasing the React Admin Dashboard as a powerful tool for data-driven decision-making.
                    </ProjectDescription>
                    <BuiltWith>
                        Built With
                    </BuiltWith>
                    <BuiltWithIcons>
                        <TechStackIcon icon={mongodb_svg} name="MongoDB"/>
                        <TechStackIcon icon={nodejs_svg} name="NodeJS"/>
                        <TechStackIcon icon={express_svg} name="ExpressJS"/>
                        <TechStackIcon icon={react_svg} name="React"/>
                        <TechStackIcon icon={javascript_svg} name="JavaScript"/>
                    </BuiltWithIcons>
                    <ProjectLinks>
                        <ProjectLink target="_blank" href="https://admin-react-dashboard-3fefd24517ed.herokuapp.com/invoices">React admin dashboard</ProjectLink>
                        <ProjectLink target="_blank" href="https://github.com/AndriiPetryk/react-admin-dashboard">View Source Code</ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
            </ThinColumn>
            <ProjectVideoDemo
            watch_url={dash1}
            />
        </IndividualProject>
    )
}

export default OSFTWebApp
