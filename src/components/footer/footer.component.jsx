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
                        <FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                        <FaTwitter size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Footer;