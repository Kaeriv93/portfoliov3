import "./index.css"
import Navigation from "./routes/navigation/Navigation.component";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Project from "./routes/project/Project";
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
