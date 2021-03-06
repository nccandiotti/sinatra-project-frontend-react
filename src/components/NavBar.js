import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">See all available books</NavLink>
      <NavLink to="/mybooks">My books</NavLink>
    </header>
  )
}

export default NavBar
