import React from "react"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import LanguageOptions from "./LanguageOptions"
import Btn from "./Btn"

function SelectLang() {
  return (
    <>
      <Header />
      <main className="subpage">
        <Intro title="Select Language" />
        <div className="container">
          <LanguageOptions />
        </div>
        <Btn />
      </main>
    </>
  )
}

export default SelectLang
