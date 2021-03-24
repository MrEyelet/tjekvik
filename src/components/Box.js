import React from "react"

function Intro({ title, paragraph, icon, alt }) {
  return (
    <div className="App-box">
      <div className="Icon-wrap">
        <img src={icon} alt={alt} />
      </div>

      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default Intro
