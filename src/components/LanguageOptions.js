import React, { useEffect } from "react"
import gsap from "gsap"
import { Link, NavLink } from "react-router-dom"
//Components
import Box from "./Box.js"
//Graphics
import { ReactComponent as England } from "../assets/england.svg"
import { ReactComponent as German } from "../assets/german.svg"
import { ReactComponent as France } from "../assets/france.svg"
import { ReactComponent as Spain } from "../assets/spain.svg"

function LanguageOptions() {
  function addActive(e) {
    const test = document.querySelector(".link")
    test.classList.add("active")
    e.currentTarget.classList.add("elo")
    console.log("test", test)
  }
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-appear-el", { duration: 0.75, opacity: 1, x: 0, stagger: 0.2 })
  })
  return (
    <nav className="container">
      <NavLink className="link gsap-appear-el" to="/" activeClassName="is-active" onClick={addActive}>
        <Box icon={<England />} alt="england-flag" title="English" paragraph="English" />
      </NavLink>
      <NavLink className="link gsap-appear-el" to="/panel-german" activeClassName="is-active">
        <Box icon={<German />} alt="german-flag" title="Deutsch" paragraph="German" />
      </NavLink>
      <Link className="link gsap-appear-el" to="/">
        <Box icon={<France />} alt="england-flag" title="Français" paragraph="French" />
      </Link>
      <Link className="link gsap-appear-el" to="/">
        <Box icon={<Spain />} alt="england-flag" title="Español" paragraph="Spanish" />
      </Link>
    </nav>
  )
}

export default LanguageOptions
