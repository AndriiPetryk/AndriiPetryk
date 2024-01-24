import {
    VideoDemoStyled,
    // VideoDemo,
} from "../../styles/projects.styled"

function ProjectVideoDemo ({
    watch_url,
}) {
    return (
        <VideoDemoStyled>
            <img style={{width: "100%"}} src={watch_url} alt="dash"/>
                {/*<VideoDemo muted controls loop autoPlay>*/}
                {/*    <source src={watch_url} type="video/mp4"/>*/}
                {/*</VideoDemo>*/}
        </VideoDemoStyled>
    )
}

export default ProjectVideoDemo
