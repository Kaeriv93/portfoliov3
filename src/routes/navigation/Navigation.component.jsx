import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
const Navigation = () =>{
    return(
        <div className="navigation-container">
            <Link to ='/'>
                 <h1>Portfolio</h1>
            </Link>
            <ul>
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
            <Outlet/>
        </div>
        
    )
}

export default Navigation;