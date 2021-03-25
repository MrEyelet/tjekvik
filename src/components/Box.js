import React from "react"

function Intro(props) {
  return (
    <div className="box">
      <div className="box__icon">
        <img src={props.icon} alt={props.alt} />
      </div>

      <h3 className="box__title">{props.title}</h3>
      <p className="box__desc">{props.paragraph}</p>
    </div>
  )
}

export default Intro
