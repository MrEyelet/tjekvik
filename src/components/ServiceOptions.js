import React from "react"
import { Link } from "react-router-dom"
//Components
import Box from "./Box.js"
//Graphics
import checkInIcon from "../assets/check-in-icon.svg"
import checkOutIcon from "../assets/check-out-icon.svg"
import noAppointmentIcon from "../assets/no-appointment-icon.svg"

function ServiceOptions(props) {
  return (
    <>
      <Link className="link" to="/">
        <Box icon={checkInIcon} alt="check-in-icon" title="check in" paragraph={props.checkIn} />
      </Link>
      <Link className="link" to="/">
        <Box icon={checkOutIcon} alt="check-out-icon" title="check out" paragraph={props.checkOut} />
      </Link>
      <Link className="link" to="/">
        <Box icon={noAppointmentIcon} alt="no-appointment-icon" title={props.title} paragraph={props.withoutCheck} />
      </Link>
    </>
  )
}

export default ServiceOptions
