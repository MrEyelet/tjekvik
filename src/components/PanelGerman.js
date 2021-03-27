import React from "react"
//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"
import Footer from "./Footer.js"
//Graphics
import de from "../assets/german.svg"

function PanelGerman() {
  return (
    <>
      <Header language="de" cta="Brauche Hilfe" flag={de} />
      <main className="german">
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
