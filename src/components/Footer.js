import React from "react"
import attention from "../assets/attention.svg"

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__icon">
          <img src={attention} alt="attention-icon" />
        </div>
        <p className="footer__info">{props.info}</p>
      </div>
    </footer>
  )
}

export default Footer
