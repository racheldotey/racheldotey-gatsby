import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import LogoCSS3 from "./images/logo-css3"
import LogoGatsbyJS from "./images/logo-gatsbyjs"
import LogoGraphql from "./images/logo-graphql"
import LogoHTML5 from "./images/logo-html5"
import LogoNodeJS from "./images/logo-nodejs"
import LogoReactJS from "./images/logo-reactjs"
import LogoSASS from "./images/logo-sass"
import Signature from "./images/signature-black"

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
      <span>this website was built with</span>
      <a title="HTML5 is the latest evolution of the standard that defines HTML." href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><LogoHTML5 /></a>
      <a title="CSS3 is the latest evolution of the Cascading Style Sheets language." href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank"><LogoCSS3 /></a>
      <a title="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world." href="https://sass-lang.com/" target="_blank"><LogoSASS /></a>
      <a title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." href="https://nodejs.org/" target="_blank"><LogoNodeJS /></a>
      <a title="React.js is a JavaScript library for building user interfaces." href="https://reactjs.org/" target="_blank"><LogoReactJS /></a>
      <a title="Gatsby.js is a free and open source framework based on React that helps developers build blazing fast websites and apps." href="https://gatsbyjs.org/" target="_blank"><LogoGatsbyJS /></a>
      <a title="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data." href="https://graphql.org/" target="_blank"><LogoGraphql /></a>
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
