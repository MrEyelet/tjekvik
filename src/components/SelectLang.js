import React from "react"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import LanguageOptions from "./LanguageOptions"
import Btn from "./Btn"
//Graphics
import { ReactComponent as England } from "../assets/england.svg"

function SelectLang() {
  return (
    <>
      <Header language="en" cta="Need assistance" flag={<England />} />
      <main className="select-lang">
        <Intro title="Select language" />
        <LanguageOptions />
        <Btn text="Back" />
      </main>
    </>
  )
}

export default SelectLang
