import React from "react"
//Graphics
import support from "../assets/support.svg"

function Cta(props) {
  return (
    <div className="header__cta">
      <div className="header__cta-icon">
        <img src={support} alt="support-icon" />
      </div>
      <p className="header__cta-text">{props.cta}?</p>
    </div>
  )
}

export default Cta
