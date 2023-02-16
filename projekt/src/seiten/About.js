import React, {Fragment} from 'react'
import { useNavigate } from "react-router-dom";
import me from "./gc.png"
import "./About.css"

const About = () => {
    const navigate = useNavigate()
    return(
        <Fragment> {/* React Component */}
            <section className='about'>
                <div className="row">
                    <div className="columm">
                        <img src={me} alt="me" />
                    </div>
                    <div className="columm">
                        <div className="about-info">
                            <div className="Titel">
                                <h2>About me</h2>
                                <h3>Mein Name ist Marzio Cassese. Momentan absolviere ich die Lehre als Applikationsentwickler</h3>
                                <p>Momentan bin ich im zweiten Lehrjahr bei der IBV Solutions. Bisher konnte ich sehr vieles lernen in meiner Laufbahn als Applikationsentwickler. Um mehr über mein erstes Lehrjahr im ZLI zu erfahren, gehen Sie auf diese Website <a href="https://marzioappli.github.io/ZLI_Abschlussprojekt/Website ">https://marzioappli.github.io/ZLI_Abschlussprojekt/Website</a>.</p>
                                <p>In meiner Freizeit betreibe ich Handball in Leistungssportniveau. Wie man im Bild sehen kann spiele ich für GC Amicitia Zürich. Diese Sportart verfolge ich schon, seit ich 4 Jahre alt bin.</p>
                            <div className="privat-infos">
                                <div className="info-zeile">
                                    <div className="zeilen"><p>Name:<span>Marzio Cassese</span></p></div>
                                    <div className="zeilen"><p>Alter:<span>17</span></p></div>
                                    <div className="zeilen"><p>E-Mail:<span>marziocassese@gmail.com</span></p></div>
                                    <div className="zeilen"><p>Phone:<span>+41 078 661 45 53</span></p></div>
                                    <div className="zeilen"><p>Adresse:<span>Waldistrasse 3, Adliswil</span></p></div>
                                </div>
                            </div>
                            <div className="button-me">
                                <a href="./Contact" className="button-my" onClick={()=>{
                navigate("/contact")
            }}>Contact</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Fragment>
    )
}
export default About;