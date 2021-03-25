import React from "react"

function Intro(props) {
  return (
    <section className="intro">
      <h1 className="intro__title">{props.title}</h1>
      <h2 className="intro__subtitle">{props.subtitle}</h2>
    </section>
  )
}

export default Intro
