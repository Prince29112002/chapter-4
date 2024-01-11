import React, { useContext } from 'react'
import { colors } from '../../App'

export default function Hinn() {
  const { theme, changetheme } = useContext(colors)
  let a = (theme == "black" ? "white" : "black")


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: `${theme}`, border: "none" }}>
    <div className="container-fluid" style={{ backgroundColor: `${theme}`, color: `${theme} == "black"?"white"` }}>
      <a className="navbar-brand" href="#" style={{ color: theme == "black" ? "white" : "black", border: "none" }}>प्रिन्स ठुमर </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#" style={{ color: a }}>होम</a>
          <a className="nav-link fa fa-user" href="#" aria-hidden="true" style={{ color: a }}>अबाऊट</a>
        </div>
      </div>
    </div>
  </nav>
  )
}