import * as React from 'react';
import { Link } from 'gatsby-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import useSiteMetadata from '../../hooks/use-site-metadata';

export const Header = () => {
  const { title, tagline, phone, email } = useSiteMetadata();

  const phoneCTA =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  const emailCTA =
    "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <header>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <span className="title">{title}</span>
              <span className="tagline">{tagline}</span>
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
                  <a title={phoneCTA} href={`tel:${phone}`}>
                    {phone}
                  </a>
                  <br />
                  <Link title={emailCTA} to="/contact">
                    {email}
                  </Link>
                </p>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
