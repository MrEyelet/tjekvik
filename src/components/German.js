import React from "react"
//Components
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"

function German() {
  return (
    <main className="home">
      <Intro title="Terminal Name" subtitle="Willkommen an der Service Station" />
      <div className="container">
        <ServiceOptions title="Ohne termin" checkIn="Fahrzeug bringen" checkOut="Fahrzeug holen" withoutCheck="Fahrzeug bringen" />
      </div>
    </main>
  )
}

export default German
