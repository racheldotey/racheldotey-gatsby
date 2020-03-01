import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import LogoCSS3 from "../images/logo-css3"
import LogoGatsbyJS from "../images/logo-gatsbyjs"
import LogoGraphql from "../images/logo-graphql"
import LogoHTML5 from "../images/logo-html5"
import LogoNodeJS from "../images/logo-nodejs"
import LogoReactJS from "../images/logo-reactjs"
import LogoSASS from "../images/logo-sass"
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <footer class="footer">
    <Container>
      <Row>
        <Col>
          <p>This website built with <a href="https://www.nodejs.org">Node</a>, React and <a href="https://www.gatsbyjs.org">Gatsby</a> on Netifly.com.</p>
        </Col>
        <Col>
          <h4>Location</h4>
          <p>Working with small businesses across New England. Based in Burlington Vermont.</p>
        </Col>
        <Col>
          <h4>Connect with Rachel </h4>
          <p>607-386-5872<br />
          <Link to="/contact">hello{'{'}at{'}'}racheldotey.com</Link></p>
        </Col>
      </Row>
    </Container>
    <div className="footer-built-with">
      <small>Built with</small><br/>
      <LogoHTML5 height="20px" width="20px" /><LogoCSS3/><LogoSASS/><LogoNodeJS/><LogoReactJS/><LogoGatsbyJS/><LogoGraphql/>
    </div>
    <div className="footer-copy">
      <Container>
        <Row>
          <Col>
          <p>© 2012-{new Date().getFullYear()} <Link to="/contact">Rachel Dotey</Link> All rights reserved.</p>
          </Col>
          <Col>
          <p className="text-right"><Link to="/site-map">Site Map</Link> | <Link to="/policies">Website Policies</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
