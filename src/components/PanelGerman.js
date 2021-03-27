import React from "react"
import de from "../assets/german.svg"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"
import Footer from "./Footer.js"

function PanelGerman() {
  return (
    <>
      <Header language="de" cta="Brauche Hilfe" flag={de} />
      <main className="home">
        <Intro title="Terminal Name" subtitle="Willkommen an der Service Station" />
        <div className="container">
          <ServiceOptions title="Ohne termin" checkIn="Fahrzeug bringen" checkOut="Fahrzeug holen" withoutCheck="Fahrzeug bringen" />
        </div>
      </main>
      <Footer info="Achtung! Bitte entnehmen Sie alle Wertgegenstände aus ihrem Fahrzeug, bevor Sie mit der Abgabe beginnen." />
    </>
  )
}

export default PanelGerman
