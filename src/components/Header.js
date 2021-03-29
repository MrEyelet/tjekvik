import React from "react"
import { Link } from "react-router-dom"
//Components
import Logo from "./Logo.js"
//Graphics
import { ReactComponent as Support } from "../assets/support.svg"

function Header(props) {
  function toggleClasses() {
    const body = document.querySelector("body")
    const suffix = document.querySelector(".lang__suffix").textContent
    body.className = ""
    body.classList.add(suffix)
  }
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <a href="tel:123456789" className="cta-ph">
          <div className="cta-ph__icon">
            <Support />
          </div>
          <p className="cta-ph__text">{props.cta}?</p>
        </a>
      </div>
      <div className="lang">
        <Link className="lang__link" to="/select-lang" onClick={toggleClasses}>
          <div className="lang__icon">{props.flag}</div>
          <span className="lang__suffix">{props.language}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
