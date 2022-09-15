import "./AboutContent.styles.scss";
import Phone from "../../assets/phone.jpg"
import ReactPic from "../../assets/react-code.jpg"
import { Link } from "react-router-dom";
const AboutContent = () =>{
    return(
        <div className = "about-container">
            <div className="left-container">
                <h1>Who Am I?</h1>
                <p>I am a front-end devloper who enjoys creating responsive websites! I have done maintenance and even created new sites for local businesses in my area.
                I enjoy working with React and using different apis. When I'm not working on the latest technologies I love to take my dogs out for a walk and enjoy watching anime.
                </p>
                <Link to ='/contact'><button className="btn">CONTACT</button></Link>
                <h1>My Skills</h1>
                <h2>Languages:</h2>
                <p>PYTHON, HTML, CSS, JAVASCRIPT, JAVA, SQL</p>
                <h2>Frameworks & Libraries</h2>
                <p>SPRING, REACT, ANGULAR, EJS, LIQUID, BOOTSTRAP, BULMA</p>
                <h2>Databases</h2>
                <p>MONGODB, POSTGRESQL, MYSQL, ORACLE</p>
            </div>
            <div className="right-container">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src ={Phone} alt="react" className="img"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src ={ReactPic} alt="phone" className="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;