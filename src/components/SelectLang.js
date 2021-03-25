import React from "react"
import { Link } from "react-router-dom"

//Components
import Intro from "./Intro.js"
import LanguageOptions from "./LanguageOptions"

function SelectLang() {
  return (
    <main className="subpage">
      <Intro title="Select Language" />
      <div className="container">
        <LanguageOptions />
      </div>
      <Link className="btn" to="/">
        Back
      </Link>
    </main>
  )
}

export default SelectLang
