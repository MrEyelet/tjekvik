import React from "react"

function Intro({ title, subtitle }) {
  return (
    <section className="intro">
      <h1 className="intro__title">{title}</h1>
      <h2 className="intro__subtitle">{subtitle}</h2>
    </section>
  )
}

export default Intro
