import React from "react";
import { Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./seiten/Home"
import About from "./seiten/About"
import Contact from "./seiten/Contact"
import Wetterapi from "./seiten/Wetterapi"
import Datagrid from "./seiten/Datagrid"
import Minigame from "./seiten/Minigame"
import './index.css';


function App() {

  return(
      <Router>
        <div className="background-color"> {/* Setzt Hintergrundfarbe */}
        <nav className="navbar">
        <h1>Marzio Cassese</h1>
        <div className="links">    {/* Class für die Links in der */}
        <Link to= "/">Home</Link>
        <Link to= "/about">About</Link>
        <Link to= "/contact">Contact</Link>   {/*Von React Router bereitgestellte Komponente, die ein Anker-Tag erstellt*/}
        <Link to= "/wetterapi">Wetter-Api</Link>
        <Link to= "/minigame">Minigame</Link>
        <Link to= "/datagrid">Data Grid</Link>
        </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/> {/*Bestimmte Route in der Anwendung definieren*/}
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/wetterapi" element={<Wetterapi />}/>
          <Route path="/minigame" element={<Minigame />}/>
          <Route path="/datagrid" element={<Datagrid />}/>
        </Routes>
        <div className="footer-container">
          <footer>&copy;2023 Meine erste React Website</footer>     {/* Fusszeile bleibt auf jeder Seite, weil nicht in Routes drin */}
        </div>
        </div>
      </Router>
  )
}
export default App