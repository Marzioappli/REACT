import React from "react";
import me from './me.png';

function Home() {
    const textStyle = {
        textAlign: 'center'
        };
    return(

        <div style={textStyle} className="main-text" >
        <img src={me} alt="" className="main-picture" /> {/* Importiertes Bild eingesetzt */}
        <div className="homepage-text">
    <h1 className="title">Welcome to my Homepage!</h1>
    <p className="description">
            Mein Name ist Marzio Cassese.<br></br> Seit ich 4 Jahre alt bin spiele ich Handball.<br></br>Vor 1 1/2 Jahren habe ich meine Lehre als Applikationsentwickler angefangen.
    </p>
    <a href="/About" className="button">Learn more</a>
    </div>
        <a href="https://www.instagram.com/marzio._10/" target="blank" className="instagram-link">
    <img src="https://www.fundacionmicrofinanzasbbva.org/wp-content/uploads/2017/03/new-instagram-logo-png-transparent-180x180.png" alt="Instagram logo" className="instagram-logo" />
    </a>
    </div>
    )
}

export default Home