import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//Components
import Home from "./components/Home.js"
import PanelGerman from "./components/PanelGerman.js"
import SelectLangEn from "./components/SelectLangEn.js"
import SelectLangDe from "./components/SelectLangDe.js"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/panel-german">
          <PanelGerman />
        </Route>
        <Route path="/select-lang-en">
          <SelectLangEn />
        </Route>
      </Switch>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
