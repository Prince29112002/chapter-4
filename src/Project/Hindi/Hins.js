import React from 'react'

export default function Hins() {
  return (
    <aside style={{ background: "blue" }}>
    <p> मेन्यू </p>
    <a href="/">
      <i className="fa fa-user-o" aria-hidden="true"></i>
      मारी ड्राइव
    </a>
    <a href="/">
      <i className="fa fa-laptop" aria-hidden="true"></i>
      कंप्यूटर
    </a>
    <a href="/">
      <i className="fa fa-clone" aria-hidden="true"></i>
      मेरे साथ बांटा
    </a>
    <a href="/">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      स्टार
    </a>
    <a href="/">
      <i className="fa fa-trash-o" aria-hidden="true"></i>
      कचरा
    </a>
  </aside>
  )
}