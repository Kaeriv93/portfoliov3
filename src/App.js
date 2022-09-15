import "./index.css"
import Navigation from "./routes/navigation/Navigation.component";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = '/' element ={<Navigation/>}>
        <Route index element = {<Home/>}/>
        <Route path ='about' element = {<About/>}/>
        <Route path ='contact' element  = {<Contact/>}/>
        <Route path ='project' element  = {<Project/>}/>
      </Route>
    </Routes>

  );
}

export default App;
