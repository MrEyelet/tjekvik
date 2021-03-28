import React from "react"

function Preloader() {
  return (
    <div className="preloader" aria-label="preloader screen">
      <div className="preloader__outer-circle">
        <div className="preloader__gap"></div>
        <div className="preloader__inner-circle"></div>
      </div>
    </div>
  )
}

export default Preloader
