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
import Signature from "../images/signature-black"
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <footer class="footer">
    <div className="footer-main">
      <Container>
        <Row>
          <Col>
            <h4>How can I make<br />
              <span className="highlight">your business better</span>?</h4>

            <div class="buttons">
              <a title="I would love to talk about your business!" href="contact" class="button button-size-large"><span>Lets Talk</span><i class="fal fa-long-arrow-right" aria-hidden="true"></i></a>

            </div>

          </Col>
          <Col>
            <h4>Location</h4>
            <p>Working with small businesses across New England. Based in Burlington Vermont.</p>
          </Col>
          <Col>
            <h4>Connect with Rachel </h4>
            <p><a title="Call me at 607-386-5872" href="tel:607-386-5872">607-386-5872</a><br />
              <Link title="Lets discuss your business!" to="/contact">hello{'{'}at{'}'}racheldotey.com</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="footer-built-with">
      <small>Built with</small><br />
      <LogoHTML5 height="20px" width="20px" /><LogoCSS3 /><LogoSASS /><LogoNodeJS /><LogoReactJS /><LogoGatsbyJS /><LogoGraphql />
    </div>
    <div className="footer-copywrite">
      <Container>
        <Row>
          <Col>
            <Link title={"© 2012-" + new Date().getFullYear() + " Rachel L Dotey, Website and Software Developer"} to="/contact"><Signature /></Link>
          </Col>
          <Col>
            <div className="d-flex h-100 text-right">
              <div className="justify-content-center align-self-center ml-auto">
                <span>
                  <Link to="/site-map">Site Map</Link> | <Link to="/policies">Website Policies</Link>
                </span>
              </div>
            </div>
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
