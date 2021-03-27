import React from "react"
import { Link } from "react-router-dom"
//Graphics
import england from "../assets/england.svg"
import german from "../assets/german.svg"
import france from "../assets/france.svg"
import spain from "../assets/spain.svg"

//Components
import Box from "./Box.js"

function LanguageOptions() {
  return (
    <>
      <Link className="link" to="/">
        <Box icon={england} alt="england-flag" title="English" paragraph="English" />
      </Link>
      <Link className="link" to="/panel-german">
        <Box icon={german} alt="german-flag" title="Deutsch" paragraph="German" />
      </Link>
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
