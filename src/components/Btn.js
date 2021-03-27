import React from "react"
import { Link } from "react-router-dom"

function Btn(props) {
  return (
    <Link className="btn" to="/">
      {props.text}
    </Link>
  )
}

export default Btn
