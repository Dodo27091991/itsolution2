import './App.css';
//import About from './components/About';
import Navbar from './components/NavBar1';
import Page1 from './components/Page1';
import { useState } from 'react';
//import {
//  BrowserRouter as Router, 
//  Routes,
//  Route, 
//} from "react-router-dom";
//import Projects from './components/Projects';

function App() {
  const [mode, setmode] = useState("light")

  const toggleMode = () =>{
    if (mode==="dark"){
      setmode("light")
      document.body.style.backgroundColor="white";
    }
    if (mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#041651";
    }
  } 
  

  return (
    <>
      
    <Navbar mode={mode} toggleMode={toggleMode} />
{/*   <Router >
      <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/about' element={<About mode={mode} toggleMode={toggleMode}/>}/>
      <Route path='/projects' element={<Projects />} /> 
      </Routes>
      <br />
    </Router>
  */} 
  <Page1 />
     </>
  );
}

export default App;
