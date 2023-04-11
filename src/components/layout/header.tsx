import { Link } from 'gatsby-link';
import PropTypes from 'prop-types';
import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = ({ siteTitle }) => (
  <header>
    <Navbar collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <span className="title">{siteTitle}</span>
            <span className="tagline">Websites & Software</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto"></Nav>

          <Nav className="nav-main-menu">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>

          <Nav className="smallview-nav-contact d-sm-none">
            <div>
              <p className="h4 highlight">Why wait, lets talk!</p>
              <p>
                <a title="Call me at 607-386-5872" href="tel:607-386-5872">
                  607-386-5872
                </a>
                <br />
                <Link title="Lets discuss your business!" to="/contact">
                  hello@racheldotey.com
                </Link>
              </p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
