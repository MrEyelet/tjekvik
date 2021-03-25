import React from "react"
import { withRouter } from "react-router-dom"
import attention from "../assets/attention.svg"

function Footer(props) {
  const { location } = props
  if (location.pathname.match(/select-language/)) {
    return null
  }

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

export default withRouter(Footer)
