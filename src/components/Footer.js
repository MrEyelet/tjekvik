import React, { useEffect } from "react"
import gsap from "gsap"
//Graphics
import attention from "../assets/attention.svg"

function Footer(props) {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-appear-icon", { duration: 1, opacity: "1", delay: 0.75 })
    tl.to(".gsap-appear-cover", { duration: 0.25, scaleX: "1" }, "=-0.6")
    tl.to(".gsap-appear-text", { duration: 0, opacity: "1" })
    tl.to(".gsap-appear-cover", { duration: 0.25, scaleX: "0", transformOrigin: "right" })
  })
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__icon gsap-appear-icon">
          <img src={attention} alt="attention-icon" />
        </div>
        <p className="footer__info">
          <span className="footer__info-cover gsap-appear-cover" aria-hidden="true"></span>
          <span className="footer__info-inner gsap-appear-text">{props.info}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
