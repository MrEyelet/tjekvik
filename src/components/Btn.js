import React from "react"
import { Link } from "react-router-dom"

function Btn(props) {
  function scrolltop() {
    window.scrollTo(0, 0)
  }
  return (
    <Link className="btn" to="/" onClick={scrolltop}>
      {props.text}
    </Link>
  )
}

export default Btn
