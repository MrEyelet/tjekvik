import React from "react"
import { Link } from "react-router-dom"
//Graphics
import { ReactComponent as Tjekvik } from "../assets/logo-alt.svg"

function Logo() {
  return (
    <Link to="/" className="logo">
      <Tjekvik />
    </Link>
  )
}

export default Logo
