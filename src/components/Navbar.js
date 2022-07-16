import React from "react";
import "./style.css";
import Sellular from "./Sellular 4.png";
import TypeWriterEffect from "react-typewriter-effect"; 

export default function Navbar()
{
    return(
  <nav className="masked-custom navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-0">
  <img src={Sellular} alt="logo" className="Logo"></img>
  <div style={{display:"flex",flexDirection:"row"}}>
    <h4 className="logo-text">SELL</h4>
    <div className="typewriter-text">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "arial",
                color: "#1EBAA3",
                fontWeight: 2000,
                fontSize: "1.5em",
                hideCursorAfterText: true,
              }}
              startDelay={2000}
              cursorColor="#1EBAA3"
              multiText={["ಮಾಡು", "செய்", "കറോ", "ਕਰੋ", "करो", "ular"]}
              multiTextDelay={2000}
              typeSpeed={100}
              loop={true}
              />
        </div>
  </div>
  <div>
    <ul>
      <li className="li-tag">
        <a>JOIN-US</a>
      </li>
      <li className="li-tag">
        <a>CAREER</a>
      </li>
    </ul>
  </div>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link disabled" href="./Career.js">CAREER</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">JOIN-US</a>
      </li>
    </ul>
  </div> */}
</nav>
);
}
