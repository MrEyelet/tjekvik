import React from "react"

function Box(props) {
  return (
    <div className="box">
      <div className="box__icon">{props.icon}</div>
      <h3 className="box__title">{props.title}</h3>
      <p className="box__desc">{props.paragraph}</p>
    </div>
  )
}

export default Box
