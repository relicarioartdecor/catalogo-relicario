import React, { Component } from "react";
import gsap from "gsap";
import Logo from "./IMG/Logo/LogoEscrito.png";
import "./style.css";

export default class Home extends Component {
  animaLogo = () => {
    let tl = gsap.timeline();
    tl.from(".logo-home", {
      delay: 0.5,
      duration: 1.5,
      height: 100,
      opacity: 0
    })
      .to(".logo-home", { duration: 1, opacity: 0})
     
  };
  
  render() {
    return (
      <div className="main">
        <div className="logo-container">
          <img
            src={Logo}
            alt="logo-home"
            className="logo-home"
            onLoad={this.animaLogo}
          />
        </div>
        <div className="text-container">
          <h3>Seja Bem vindo(a)!</h3>
          <p>Utilize o menu acima para navegar entre os diferentes catálogos</p>
        </div>
      </div>
    );
  }
}
