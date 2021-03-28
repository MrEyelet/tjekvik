import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//Components
import Preloader from "./components/Preloader.js"
import Home from "./components/Home.js"
import PanelGerman from "./components/PanelGerman.js"
import PanelFrance from "./components/PanelFrance.js"
import SelectLang from "./components/SelectLang.js"
import "./App.scss"

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <Preloader />
        ) : (
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
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
