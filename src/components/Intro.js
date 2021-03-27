import React, { useEffect } from "react"
import gsap from "gsap"

function Intro(props) {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-appear-title", { duration: 0.75, y: "0", opacity: 1, stagger: 0.2 })
  })
  return (
    <section className="intro">
      <h1 className="intro__title gsap-appear-title">{props.title}</h1>
      <h2 className="intro__subtitle gsap-appear-title">{props.subtitle}</h2>
    </section>
  )
}

export default Intro
