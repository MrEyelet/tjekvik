import React from "react"
import checkInIcon from "../assets/check-in-icon.svg"
import checkOutIcon from "../assets/check-out-icon.svg"
import noAppointmentIcon from "../assets/no-appointment-icon.svg"
//Components
import Box from "./Box.js"

function Home() {
  return (
    <div className="container">
      <Box icon={checkInIcon} alt="check-in-icon" title="check in" paragraph="Bring The Vehicle" />
      <Box icon={checkOutIcon} alt="check-out-icon" title="check out" paragraph="Get The Vehicle" />
      <Box icon={noAppointmentIcon} alt="no-appointment-icon" title="without appointment" paragraph="Brinf The Vehicle" />
    </div>
  )
}

export default Home
