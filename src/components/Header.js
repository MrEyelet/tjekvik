import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import flag from "../assets/flag.svg"
import support from "../assets/support.svg"

function Header() {
  return (
    <header className="App-header">
      <div className="App-header__wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="header__cta">
          <Link to="/select-language">
            <img src={support} alt="" />
            <p>elo</p>
          </Link>
        </div>
      </div>
      <div className="lang">
        <img src={flag} alt="" />
        <span>En</span>
      </div>
    </header>
  )
}

export default Header
