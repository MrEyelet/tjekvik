import React from "react"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import LanguageOptions from "./LanguageOptions"
import Btn from "./Btn"
//Graphics
import en from "../assets/england.svg"

function SelectLangEn() {
  return (
    <>
      <Header language="en" cta="Need assistance" flag={en} />
      <main className="select-lang-en">
        <Intro title="Select Language" />
        <LanguageOptions />
        <Btn text="english" />
      </main>
    </>
  )
}

export default SelectLangEn
