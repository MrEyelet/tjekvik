import React from "react"
//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"
import Footer from "./Footer.js"
//Graphics
import { ReactComponent as Spain } from "../assets/spain.svg"

function PanelGerman() {
  return (
    <>
      <Header language="es" cta="Necesita ayuda" flag={<Spain />} />
      <main className="spain">
        <Intro title="Nombre De Terminal" subtitle="Bienvenida a la estacion de servicio" />
        <ServiceOptions title="sin cita" checkIn="Trae El Vehículo" checkOut="Obtener el vehículo" withoutCheck="Trae El Vehículo" />
      </main>
      <Footer info="¡Atención! Retire todos los objetos de valor de su vehículo antes de comenzar a entregarlos." />
    </>
  )
}

export default PanelGerman
