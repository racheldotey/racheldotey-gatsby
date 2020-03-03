import Link from "gatsby-link"
import PropTypes from "prop-types"
import React from "react"

import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar collapseOnSelect expand="sm">
      <div className="container">
        <Navbar.Brand href="/">
          <span className="title">{siteTitle}</span>
          <span className="tagline">Websites & Software</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="nav-main-menu">
            <Link to="/about"  className="nav-link">About</Link>
            <Link eventKey={2} to="/services" className="nav-link">Services</Link>
            <Link eventKey={3} to="/contact" className="nav-link">Contact</Link>
          </Nav>
          <Nav className="smallview-nav-contact d-sm-none">
            <div>
              <p class="h4 highlight">Connect with Rachel</p>
              <p>607-386-5872<br />
                hello{"{at}"}racheldotey.com</p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
