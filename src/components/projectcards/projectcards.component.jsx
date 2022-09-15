import "./projectcards.styles.scss";

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
                    <a href={project.live} target = "_blank" rel="noopener noreferrer" className="btn">View</a>
                    <a href={project.git} target = "_blank" rel="noopener noreferrer"  className="btn">Source</a>
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