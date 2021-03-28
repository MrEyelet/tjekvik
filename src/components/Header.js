import React from "react"
import { Link } from "react-router-dom"
//Components
import Logo from "./Logo.js"
//Graphics
import support from "../assets/support.svg"

function Header(props) {
  const toggleClasses = () => {
    const body = document.querySelector("body")
    const suffix = document.querySelector(".lang__suffix").textContent
    body.className = ""
    body.classList.add(suffix)
  }
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <div className="header__cta">
          <div className="header__cta-icon">
            <img src={support} alt="support-icon" />
          </div>
          <p className="header__cta-text">{props.cta}?</p>
        </div>
      </div>
      <div className="lang">
        <Link to="/select-lang" onClick={toggleClasses}>
          <div className="lang__icon">{props.flag}</div>
          <span className="lang__suffix">{props.language}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
