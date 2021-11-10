import './Projects.css';
import Project from "./project/Project";
import logoSphere from '../../images/projectIcons/sphere.jpg'


function Projects(props) {
    return (
        <div className="projects">
            <Project imgPath={logoSphere} heading={"Игра \"Шарик\""} id={1}/>
        </div>
    )
}

export default Projects;