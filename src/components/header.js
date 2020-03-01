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
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link eventKey={2} href="/services">Services</Nav.Link>
            <Nav.Link eventKey={3} href="/contact">Contact</Nav.Link>
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
