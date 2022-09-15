import Heroimg2 from "../../components/heroimg2/HeroImg2.component";
import ProjectCards from "../../components/projectcards/projectcards.component";
const Project = ({projects}) =>{
    return (
        <div>
            <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
            <ProjectCards projects = {projects}/>
        </div>
    )
}

export default Project;