import React from "react"
import checkInIcon from "../assets/check-in-icon.svg"
import checkOutIcon from "../assets/check-out-icon.svg"
import noAppointmentIcon from "../assets/no-appointment-icon.svg"
//Components
import Box from "./Box.js"

function Home() {
  return (
    <div className="container">
      <Box icon={checkInIcon} alt="check-in-icon" title="first box title" paragraph="first box paragraph" />
      <Box icon={checkOutIcon} alt="check-out-icon" title="second box title" paragraph="second box paragraph" />
      <Box icon={noAppointmentIcon} alt="no-appointment-icon" title="third box title" paragraph="third box paragraph" />
    </div>
  )
}

export default Home
