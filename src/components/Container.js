import React from "react"
import { Link } from "react-router-dom"
//Graphics
import checkInIcon from "../assets/check-in-icon.svg"
import checkOutIcon from "../assets/check-out-icon.svg"
import noAppointmentIcon from "../assets/no-appointment-icon.svg"
//Components
import Box from "./Box.js"

function Container() {
  return (
    <div className="container">
      <Link className="link" to="/">
        <Box icon={checkInIcon} alt="check-in-icon" title="check in" paragraph="Fahrzeug bringen" />
      </Link>
      <Link className="link" to="/">
        <Box icon={checkOutIcon} alt="check-out-icon" title="check out" paragraph="Fahrzeug holen" />
      </Link>
      <Link className="link" to="/">
        <Box icon={noAppointmentIcon} alt="no-appointment-icon" title="ohne termin" paragraph="Fahrzeug bringen" />
      </Link>
    </div>
  )
}

export default Container
