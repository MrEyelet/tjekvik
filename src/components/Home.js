import React from "react"
import en from "../assets/england.svg"

//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"
import Footer from "./Footer.js"

function Home() {
  return (
    <>
      <Header language="en" cta="need assistance" flag={en} />
      <main className="home">
        <Intro title="Terminal Name" subtitle="Welcome to the service station" />
        <div className="container">
          <ServiceOptions title="without appointment" checkIn="Bring The Vehicle" checkOut="Get The Vehicle" withoutCheck="Bring the vehicle" />
        </div>
      </main>
      <Footer info="Attention! Please remove all valuables from your vehicle before you start handing them in." />
    </>
  )
}

export default Home
