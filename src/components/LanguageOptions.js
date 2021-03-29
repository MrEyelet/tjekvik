import React, { useEffect } from "react"
import gsap from "gsap"
import { Link } from "react-router-dom"
//Components
import Box from "./Box.js"
//Graphics
import { ReactComponent as England } from "../assets/england.svg"
import { ReactComponent as German } from "../assets/german.svg"
import { ReactComponent as France } from "../assets/france.svg"
import { ReactComponent as Spain } from "../assets/spain.svg"

function LanguageOptions() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-appear-el", { duration: 0.75, opacity: 1, x: 0, stagger: 0.2 })
  })
  function scrolltop() {
    window.scrollTo(0, 0)
  }
  return (
    <nav className="container">
      <Link className="link active-en gsap-appear-el" to="/" onClick={scrolltop}>
        <Box icon={<England />} title="English" paragraph="English" />
      </Link>
      <Link className="link active-de gsap-appear-el" to="/panel-german" onClick={scrolltop}>
        <Box icon={<German />} title="Deutsch" paragraph="German" />
      </Link>
      <Link className="link active-fr gsap-appear-el" to="/panel-france" onClick={scrolltop}>
        <Box icon={<France />} title="Français" paragraph="French" />
      </Link>
      <Link className="link active-es gsap-appear-el" to="/panel-spain" onClick={scrolltop}>
        <Box icon={<Spain />} title="Español" paragraph="Spanish" />
      </Link>
    </nav>
  )
}

export default LanguageOptions
