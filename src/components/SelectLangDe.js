import React from "react"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import LanguageOptions from "./LanguageOptions"
import Btn from "./Btn"
//Graphics
import de from "../assets/german.svg"

function SelectLangDe() {
  return (
    <>
      <Header language="de" cta="brauche Hilfe" flag={de} />
      <main className="select-lang-de">
        <Intro title="Deutsch" />
        <div className="container">
          <LanguageOptions />
        </div>
        <Btn />
      </main>
    </>
  )
}

export default SelectLangDe
