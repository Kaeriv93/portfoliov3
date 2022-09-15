import { Link } from "react-router-dom";
import './navigation.styles.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import {useState} from 'react';


const Navigation = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 1) 
            setColor(true);          
        else setColor(false);
    }
    window.addEventListener("scroll", changeColor);
    return(
        <>
            <div className={color ? "navigation-container navigation-container-bg" : "navigation-container"}>
                <Link to ='/'>
                    <h1>Portfolio</h1>
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to ='/about'>About</Link>
                    </li>
                    <li>
                        <Link to ='/project'>Projects</Link>
                    </li>
                    <li>
                        <Link to ='/contact'>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaTimes size={20} style={{color: "#fff"}}/> : <FaBars size={20} style={{color: "#fff"}}/>}
                </div>
            </div>
        </>
        
    )
}

export default Navigation;