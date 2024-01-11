import React, { useContext } from 'react'
import { colors } from '../../App';

export default function Engs() {
  const { theme, changetheme } = useContext(colors);

  return (
    <aside style={{ backgroundColor: `${theme}`, border:"1px solid White", color: `${theme} == "black"?"white"` }}>
    <p> Menu </p>
    <a href="/">
      <i className="fa fa-user-o" aria-hidden="true"></i>
      My drive
    </a><br />
    <a href="/">
      <i className="fa fa-laptop" aria-hidden="true"></i>
      Computers
    </a><br />
    <a href="/">
      <i className="fa fa-clone" aria-hidden="true"></i>
      Shared with me
    </a><br />
    <a href="/">
      <i className="fa fa-star-o" aria-hidden="true"></i>
      Starred
    </a><br />
    <a href="/">
      <i className="fa fa-trash-o" aria-hidden="true"></i>
      Trash
    </a><br />
  </aside>
  )
}