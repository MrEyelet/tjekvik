import React from "react"
import attention from "../assets/attention.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img src={attention} alt="attention-icon" />
        <p>Attention! Please remove all valuables from your vehicle before you start handing them in.</p>
      </div>
    </footer>
  )
}

export default Footer
