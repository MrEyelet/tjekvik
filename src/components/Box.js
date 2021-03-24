import React from "react"

function Intro({ title, paragraph, icon, alt }) {
  return (
    <div className="box">
      <div className="box__icon">
        <img src={icon} alt={alt} />
      </div>

      <h3 className="box__title">{title}</h3>
      <p className="box__desc">{paragraph}</p>
    </div>
  )
}

export default Intro
