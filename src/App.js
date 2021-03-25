// import logo from "./assets/logo.png"
// import checkInIcon from "./assets/check-in-icon.svg"
// import checkOutIcon from "./assets/check-out-icon.svg"
// import noAppointmentIcon from "./assets/no-appointment-icon.svg"
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//Components
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import SelectLang from "./components/SelectLang.js"
import Footer from "./components/Footer.js"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/select-language">
            <SelectLang />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
