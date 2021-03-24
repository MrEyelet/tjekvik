import React from "react"
import { Link } from "react-router-dom"
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
          <img src={support} alt="support-icon" />
          <p className="header__cta-text">Need assistance ?</p>
        </div>
      </div>
      <div className="lang">
        <Link to="/select-language">
          <img src={flag} alt="flag-icon" />
          <span className="lang__suffix">En</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
