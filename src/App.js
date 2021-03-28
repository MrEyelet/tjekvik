import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//Components
import Home from "./components/Home.js"
import PanelGerman from "./components/PanelGerman.js"
import PanelFrance from "./components/PanelFrance.js"
import SelectLang from "./components/SelectLang.js"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/panel-german">
            <PanelGerman />
          </Route>
          <Route path="/panel-france">
            <PanelFrance />
          </Route>
          <Route path="/select-lang">
            <SelectLang />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
