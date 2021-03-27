import React, { useEffect } from "react"
import gsap from "gsap"

import attention from "../assets/attention.svg"

function Footer(props) {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } })
    tl.to(".gsap-icon", { duration: 1, opacity: "1" })
    tl.to(".gsap-cover", { duration: 0.5, scaleX: "1" })
    tl.to(".gsap-text", { duration: 0, opacity: "1" })
    tl.to(".gsap-cover", { duration: 0.5, scaleX: "0", transformOrigin: "right" })
  })
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__icon gsap-icon">
          <img src={attention} alt="attention-icon" />
        </div>
        <p className="footer__info">
          <span className="footer__info-cover gsap-cover" aria-hidden="true"></span>
          <span className="footer__info-inner gsap-text">{props.info}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
