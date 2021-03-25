import React from "react"
import { Link } from "react-router-dom"

import checkInIcon from "../assets/check-in-icon.svg"
import checkOutIcon from "../assets/check-out-icon.svg"
import noAppointmentIcon from "../assets/no-appointment-icon.svg"
//Components
import Intro from "./Intro.js"
import Box from "./Box.js"

function Home() {
  return (
    <main className="home">
      <Intro title="Terminal Name" subtitle="Welcome to the service station" />
      <div className="container">
        <Link className="select" to="/">
          <Box icon={checkInIcon} alt="check-in-icon" title="check in" paragraph="Bring The Vehicle" />
        </Link>

        <Link className="select" to="/">
          <Box icon={checkOutIcon} alt="check-out-icon" title="check out" paragraph="Get The Vehicle" />
        </Link>

        <Link className="select" to="/">
          <Box icon={noAppointmentIcon} alt="no-appointment-icon" title="without appointment" paragraph="Brinf The Vehicle" />
        </Link>
      </div>
    </main>
  )
}

export default Home
