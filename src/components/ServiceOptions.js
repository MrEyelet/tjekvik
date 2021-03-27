import React from "react"
import { Link } from "react-router-dom"
//Components
import Box from "./Box.js"
//Graphics
import { ReactComponent as CheckInIcon } from "../assets/check-in-icon.svg"
import { ReactComponent as CheckOutIcon } from "../assets/check-out-icon.svg"
import { ReactComponent as NoAppointmentIcon } from "../assets/no-appointment-icon.svg"

function ServiceOptions(props) {
  return (
    <>
      <Link className="link" to="/">
        <Box icon={<CheckInIcon />} alt="check-in-icon" title="check in" />
      </Link>
      <Link className="link" to="/">
        <Box icon={<CheckOutIcon />} alt="check-out-icon" title="check out" paragraph={props.checkOut} />
      </Link>
      <Link className="link" to="/">
        <Box icon={<NoAppointmentIcon />} alt="no-appointment-icon" title={props.title} paragraph={props.withoutCheck} />
      </Link>
    </>
  )
}

export default ServiceOptions
