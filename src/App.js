// import logo from "./assets/logo.png"
// import checkInIcon from "./assets/check-in-icon.svg"
// import checkOutIcon from "./assets/check-out-icon.svg"
// import noAppointmentIcon from "./assets/no-appointment-icon.svg"
import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//Components
import Home from "./components/Home.js"
import PanelGerman from "./components/PanelGerman.js"
import SelectLang from "./components/SelectLang.js"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panel-german" component={PanelGerman} />
          <Route path="/select-language" component={SelectLang} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
