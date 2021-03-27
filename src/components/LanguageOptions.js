import React from "react"
import { Link, NavLink } from "react-router-dom"
//Components
import Box from "./Box.js"
//Graphics
import england from "../assets/england.svg"
import german from "../assets/german.svg"
import france from "../assets/france.svg"
import spain from "../assets/spain.svg"

function LanguageOptions() {
  function addActive(e) {
    const test = document.querySelector(".link")
    test.classList.add("active")
    console.log("test", test)
  }
  return (
    <>
      <NavLink className="link" to="/" activeClassName="is-active" onClick={addActive}>
        <Box icon={england} alt="england-flag" title="English" paragraph="English" />
      </NavLink>
      <NavLink className="link" to="/panel-german" activeClassName="is-active">
        <Box icon={german} alt="german-flag" title="Deutsch" paragraph="German" />
      </NavLink>
      <Link className="link" to="/">
        <Box icon={france} alt="england-flag" title="Français" paragraph="French" />
      </Link>
      <Link className="link" to="/">
        <Box icon={spain} alt="england-flag" title="Español" paragraph="Spanish" />
      </Link>
    </>
  )
}

export default LanguageOptions
