import React, { useEffect } from "react"
import gsap from "gsap"

function Intro(props) {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-appear-title", { duration: 0.75, y: "0", stagger: 0.2 })
  })
  return (
    <section className="intro">
      <h1 className="intro__title">
        <span className="intro__title-inner  gsap-appear-title">{props.title}</span>
      </h1>
      <h2 className="intro__subtitle">
        <span className="intro__subtitle-inner  gsap-appear-title">{props.subtitle}</span>
      </h2>
    </section>
  )
}

export default Intro
