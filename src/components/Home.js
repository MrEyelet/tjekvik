import React from "react"
//Components
import Intro from "./Intro.js"
import Container from "./Container.js"

function Home() {
  return (
    <main className="home">
      <Intro title="Terminal Name" subtitle="Welcome to the service station" />
      <Container />
    </main>
  )
}

export default Home
