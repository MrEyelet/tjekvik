import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
//Components
import Box from "./Box.js"
//Graphics
import { ReactComponent as CheckInIcon } from "../assets/check-in-icon.svg"
import { ReactComponent as CheckOutIcon } from "../assets/check-out-icon.svg"
import { ReactComponent as NoAppointmentIcon } from "../assets/no-appointment-icon.svg"

function ServiceOptions(props) {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-appear-el", { duration: 0.75, opacity: 1, x: 0, stagger: 0.2 })
  })
  return (
    <nav className="container">
      <Link className="link gsap-appear-el" to="/">
        <Box icon={<CheckInIcon />} title="check in" paragraph={props.checkIn} />
      </Link>
      <Link className="link gsap-appear-el" to="/">
        <Box icon={<CheckOutIcon />} title="check out" paragraph={props.checkOut} />
      </Link>
      <Link className="link gsap-appear-el" to="/">
        <Box icon={<NoAppointmentIcon />} title={props.title} paragraph={props.withoutCheck} />
      </Link>
    </nav>
  )
}

export default ServiceOptions
