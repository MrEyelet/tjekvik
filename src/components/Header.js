import React from "react"
import logo from "../assets/logo.svg"
import flag from "../assets/flag.svg"
import support from "../assets/support.svg"

function Header() {
  return (
    <header className="App-header">
      <div className="App-header__wrapper">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__cta">
          <img src={support} alt="" />
          <p>elo</p>
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
