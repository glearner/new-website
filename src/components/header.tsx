import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../css/header.css"
import useImage from "./hooks/useImage"

const Header = props => {
  const { logo } = useImage()
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div className="logo">
          <Img fluid={logo.fluid} alt="none" />
        </div>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#blog">My Blogs</Link>
        </li>
        <li>
          <Link to="#about">About</Link>
        </li>
        {/* <li>
          <Link to="#contact">Contact</Link>
        </li> */}
      </ul>
    </header>
  )
}

export default Header
