import "./projectcards.styles.scss";
import { NavLink } from "react-router-dom";
const ProjectCards = ({projects}) =>{
    const projectData = () => {
        return projects.map((project, idx) =>(
            <div className="project-card" key={idx}>
                <img src={project.image} alt="pic"/>
                <h2 className="project-title">{project.name}</h2>
                <div className="project-details">
                    <p>{project.description}</p>
                    <p>TECH: {project.tech}</p>
                </div>
                <div className="pro-btns">
                    <NavLink to={project.live} className="btn">View</NavLink>
                    <NavLink to={project.git} className="btn">Source</NavLink>
                </div>
            </div>
        ))
    }

    return(
        <div className="card-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {projectData()}
            </div>
        </div>
    )

    
}

export default ProjectCards;