// import logo from "./assets/logo.png"
// import checkInIcon from "./assets/check-in-icon.svg"
// import checkOutIcon from "./assets/check-out-icon.svg"
// import noAppointmentIcon from "./assets/no-appointment-icon.svg"

//Components
import Header from "./components/Header.js"
import Intro from "./components/Intro.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
