import React from "react"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import LanguageOptions from "./LanguageOptions"
import Btn from "./Btn"
//Graphics
import { ReactComponent as England } from "../assets/england.svg"
import { ReactComponent as German } from "../assets/german.svg"
import { ReactComponent as France } from "../assets/france.svg"
import { ReactComponent as Spain } from "../assets/spain.svg"

function SelectLang() {
  return (
    <>
      {(() => {
        const body = document.querySelector("body")
        if (body.classList.contains("en")) {
          return <Header language="en" cta="Need assistance" flag={<England />} />
        } else if (body.classList.contains("de")) {
          return <Header language="de" cta="Brauche Hilfe" flag={<German />} />
        } else if (body.classList.contains("fr")) {
          return <Header language="fr" cta="Besoin d'assistance" flag={<France />} />
        } else {
          return <Header language="es" cta="Necesita ayuda" flag={<Spain />} />
        }
      })()}
      <main className="select-lang">
        <Intro title="Select language" />
        <LanguageOptions />
        {(() => {
          const body = document.querySelector("body")
          if (body.classList.contains("en")) {
            return <Btn text="Back" />
          } else if (body.classList.contains("de")) {
            return <Btn text="Abbrechen" />
          } else if (body.classList.contains("fr")) {
            return <Btn text="Retourner" />
          } else {
            return <Btn text="Regresa" />
          }
        })()}
      </main>
    </>
  )
}

export default SelectLang
