import React from "react"
import { Link } from "react-router-dom"

import england from "../assets/england.svg"
import german from "../assets/german.svg"
import france from "../assets/france.svg"
import spain from "../assets/spain.svg"

//Components
import Box from "./Box.js"

function SelectLang() {
  return (
    <div className="container">
      <Link className="test" to="/">
        <Box icon={england} alt="england-flag" title="English" paragraph="English" />
        <Box icon={german} alt="german-flag" title="Deutsch" paragraph="German" />
        <Box icon={france} alt="england-flag" title="Français" paragraph="French" />
        <Box icon={spain} alt="england-flag" title="Español" paragraph="Spanish" />
      </Link>
    </div>
  )
}

export default SelectLang
