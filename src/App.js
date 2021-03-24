// import logo from "./assets/logo.png"
import checkInIcon from "./assets/check-in-icon.svg"
import checkOutIcon from "./assets/check-out-icon.svg"
import noAppointmentIcon from "./assets/no-appointment-icon.svg"

//Components
import Header from "./components/Header.js"
import Intro from "./components/Intro.js"
import Box from "./components/Box.js"
import Footer from "./components/Footer.js"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />

      <main>
        <Box icon={checkInIcon} alt="check-in-icon" title="first box title" paragraph="first box paragraph" />
        <Box icon={checkOutIcon} alt="check-out-icon" title="second box title" paragraph="second box paragraph" />
        <Box icon={noAppointmentIcon} alt="no-appointment-icon" title="third box title" paragraph="third box paragraph" />
      </main>

      <Footer />
    </div>
  )
}

export default App
