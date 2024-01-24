import {
    BuiltWithIcons,
    IndividualProject,
    ProjectDescription,
    ProjectDetails,
    ProjectLink,
    ProjectLinks,
    ProjectMainTitle,
    ProjectSubtitle,
    ProjectTitles,
    ThinColumn,
    BuiltWith,
} from "../../styles/projects.styled";
import ProjectVideoDemo from "./osft-video";
import TechStackIcon from "./tech-stack-icon";
import firebase_svg from '../../assets/firebase.svg'
import javascript_svg from "../../assets/javascript.svg"
import react_svg from "../../assets/react.svg"

import fitness from '../../assets/fitness.png';

function FYTExample () {
    return (
        <IndividualProject id="react-youtube-clone" $margintop='30px' >
            <ThinColumn>
                <ProjectDetails>
                    <ProjectTitles>
                        <ProjectMainTitle>
                            Modern fitness guide
                        </ProjectMainTitle>
                    </ProjectTitles>
                    <ProjectDescription>
                        The React Fitness Application was developed to meet the client's goal of creating a dynamic and user-friendly platform for fitness enthusiasts.
                        As a React developer, my contributions focused on crafting an intuitive user interface, ensuring seamless navigation, and integrating responsive design elements.
                        Leveraging React's component-based architecture, I implemented different features to this application such as a search, and functionality of choosing training.
                        The project's success is reflected in its positive user feedback, increased user engagement, and a growing community of fitness enthusiasts.
                        The React Fitness Application stands as a testament to the effective collaboration and innovative solutions brought to life by the development team
                    </ProjectDescription>
                    <ProjectSubtitle>
                        Built With
                    </ProjectSubtitle>
                    <BuiltWithIcons>
                        <TechStackIcon icon={firebase_svg} name="Firebase"/>
                        <TechStackIcon icon={javascript_svg} name="Javascript"/>
                        <TechStackIcon icon={react_svg} name="React"/>
                    </BuiltWithIcons>
                    <ProjectLinks>
                        <ProjectLink target="_blank" href="https://fitness-app-modern-0439ec66129a.herokuapp.com/">Modern fitness guide</ProjectLink>
                        <ProjectLink target="_blank" href="https://github.com/AndriiPetryk/fitness-app">View Source Code</ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
            </ThinColumn>
            <ProjectVideoDemo
            watch_url={fitness}
            />
        </IndividualProject>
    )
}

export default FYTExample

/*
Successfully designed and built a fully functional YouTube clone using
React, Firestore, and Firebase storage.
Implemented functionality that allows users to create and register
accounts, upload and watch content, interact with content through likes
and comments, and search for specific videos/channels

*/
