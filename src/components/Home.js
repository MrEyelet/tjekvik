import React from "react"
//Components
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"

function Home() {
  return (
    <main className="home">
      <Intro title="Terminal Name" subtitle="Welcome to the service station" />
      <div className="container">
        <ServiceOptions title="without appointment" checkIn="Bring The Vehicle" checkOut="Get The Vehicle" withoutCheck="Bring the vehicle" />
      </div>
    </main>
  )
}

export default Home
