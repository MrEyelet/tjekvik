import React from "react"
//Components
import Header from "./Header.js"
import Intro from "./Intro.js"
import ServiceOptions from "./ServiceOptions.js"
import Footer from "./Footer.js"
//Graphics
import en from "../assets/england.svg"
import { ReactComponent as England } from "../assets/england.svg"

function Home() {
  return (
    <>
      <Header language="en" cta="Need assistance" flag={<England />} />
      <main className="english">
        <Intro title="Terminal Name" subtitle="Welcome to the service station" />
        <ServiceOptions title="without appointment" checkIn="Bring The Vehicle" checkOut="Get The Vehicle" withoutCheck="Bring the vehicle" />
      </main>
      <Footer info="Attention! Please remove all valuables from your vehicle before you start handing them in." />
    </>
  )
}

export default Home
