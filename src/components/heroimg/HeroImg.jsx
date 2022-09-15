import './HeroImg.styles.scss';
import IntroImg from "../../assets/intro-pic.jpeg";
import { Typewriter, Cursor} from 'react-simple-typewriter'
import{ Link } from 'react-router-dom'
const HeroImg = () =>{
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>Hi, I'm Vireak</p>
                <h1>{''}
                    <Typewriter
                        words={['React.', 'Express.', 'Javascript.', 'Node.js.']}
                        loop = {false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    <Cursor/>
                </h1>
                <div>
                    <Link to ='/project' className='btn'>Projects</Link>
                    <Link to ='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;