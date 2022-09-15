import "./index.scss"
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Project from "./routes/project/Project";
import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const[projects, setProjects] = useState([])

  useEffect(()=>{
    fetch("https://vireak-san.herokuapp.com/projects")
    .then(response => response.json())
    .then((data) => setProjects(data))
  },[])

  return (
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      <Route path ='/about' element = {<About/>}/>
      <Route path ='/contact' element  = {<Contact/>}/>
      <Route path ='/project' element  = {<Project projects={projects}/>}/>
    </Routes>

  );
}

export default App;
