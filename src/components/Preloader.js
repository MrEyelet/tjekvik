import React from "react"

function Preloader() {
  return (
    <div class="preloader" aria-label="preloader screen">
      <div class="preloader__outer-circle">
        <div class="preloader__gap"></div>
        <div class="preloader__inner-circle"></div>
      </div>
    </div>
  )
}

export default Preloader
