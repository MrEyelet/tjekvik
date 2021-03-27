import React from "react"
import { Link } from "react-router-dom"
//Graphics
import logo from "../assets/logo.png"

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  )
}

export default Logo
