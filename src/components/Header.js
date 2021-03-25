import React from "react"
import { Link } from "react-router-dom"
//Graphics
import logo from "../assets/logo.svg"
import flag from "../assets/flag.svg"
import support from "../assets/support.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__cta">
          <div className="header__cta-icon">
            <img src={support} alt="support-icon" />
          </div>
          <p className="header__cta-text">Need assistance ?</p>
        </div>
      </div>
      <div className="lang">
        <Link to="/select-language">
          <div className="lang__icon">
            <img src={flag} alt="flag-icon" />
          </div>
          <span className="lang__suffix">En</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
