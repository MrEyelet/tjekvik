import React from "react"
import { Link, NavLink } from "react-router-dom"
//Components
import Box from "./Box.js"
//Graphics
import { ReactComponent as England } from "../assets/england.svg"
import { ReactComponent as German } from "../assets/german.svg"
import { ReactComponent as France } from "../assets/france.svg"
import { ReactComponent as Spain } from "../assets/spain.svg"

function LanguageOptions() {
  function addActive(e) {
    const test = document.querySelector(".link")
    test.classList.add("active")
    console.log("test", test)
  }
  return (
    <>
      <NavLink className="link" to="/" activeClassName="is-active" onClick={addActive}>
        <Box icon={<England />} alt="england-flag" title="English" paragraph="English" />
      </NavLink>
      <NavLink className="link" to="/panel-german" activeClassName="is-active">
        <Box icon={<German />} alt="german-flag" title="Deutsch" paragraph="German" />
      </NavLink>
      <Link className="link" to="/">
        <Box icon={<France />} alt="england-flag" title="Français" paragraph="French" />
      </Link>
      <Link className="link" to="/">
        <Box icon={<Spain />} alt="england-flag" title="Español" paragraph="Spanish" />
      </Link>
    </>
  )
}

export default LanguageOptions
