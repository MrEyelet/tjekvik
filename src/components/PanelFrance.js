import React from "react"
//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"
import Footer from "./Footer.js"
//Graphics
import { ReactComponent as France } from "../assets/france.svg"

function PanelGerman() {
  return (
    <>
      <Header language="fr" cta="Besoin d'assistance" flag={<France />} />
      <main className="france">
        <Intro title="Nom Du Terminal" subtitle="Bienvenue à la station service" />
        <ServiceOptions title="sans rendez-vous" checkIn="Apportez le véhicule" checkOut="Obtenez le véhicule" withoutCheck="Apportez le véhicule" />
      </main>
      <Footer info="Attention! Veuillez retirer tous les objets de valeur de votre véhicule avant de commencer à les remettre." />
    </>
  )
}

export default PanelGerman
