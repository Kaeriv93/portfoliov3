import { Outlet } from "react-router-dom";
import './navigation.styles.scss'
const Navigation = () =>{
    return(
        <div className="navigation-container">
            <h1>This is the navigation page</h1>
            <p>And this is not</p>
            <Outlet/>
        </div>
        
    )
}

export default Navigation;