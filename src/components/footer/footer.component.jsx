import "./footer.styles.scss"
import { FaHome, FaMailBulk, FaGithub, FaLinkedin, FaTwitter  } from "react-icons/fa";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left-footer">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Houston, TX</p>
                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <h4>vsan93@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <div className="right-footer">
                    <h4>About Me</h4>
                    <p>Motivated Front End Developer eager to build and 
                        maintain beautiful websites. Proficient in HTML, CSS,
                      Javascript, plus modern libraries and frameworks.
                    </p>
                    <div className="social-links">
                        <a href ="https://github.com/Kaeriv93" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
                        <a href= "https://www.linkedin.com/in/vireaksan/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
                        <a href="https://twitter.com/kaeriv93" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Footer;