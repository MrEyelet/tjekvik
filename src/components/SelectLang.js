import React from "react"
import { Link } from "react-router-dom"

import england from "../assets/england.svg"
import german from "../assets/german.svg"
import france from "../assets/france.svg"
import spain from "../assets/spain.svg"

//Components
import Intro from "./Intro.js"
import Box from "./Box.js"

function SelectLang() {
  return (
    <main className="subpage">
      <Intro title="Select Language" />

      <div className="container">
        <Link className="select" to="/">
          <Box icon={england} alt="england-flag" title="English" paragraph="English" />
        </Link>
        <Link className="select" to="/">
          <Box icon={german} alt="german-flag" title="Deutsch" paragraph="German" />
        </Link>
        <Link className="select" to="/">
          <Box icon={france} alt="england-flag" title="Français" paragraph="French" />
        </Link>
        <Link className="select" to="/">
          <Box icon={spain} alt="england-flag" title="Español" paragraph="Spanish" />
        </Link>
      </div>
      <Link className="btn" to="/">
        Back
      </Link>
    </main>
  )
}

export default SelectLang
