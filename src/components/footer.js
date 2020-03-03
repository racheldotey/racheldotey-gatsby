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
    <Container className="my-5">
      <Row>
        <Col sm={12} md={4}>
          <div className="text-center text-md-left mb-5 mb-md-0">
            <h4>How can I make<br />
            <span className="highlight">your business better</span>?</h4>

            <div class="call-to-action">
              <Link title="I would love to talk about your business!" to="/contact" className="button button-dark">
                <span>Lets discuss your  ideas</span><i class="fal fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-xs-3">
          <div className="text-center text-md-left mb-5 mb-sm-0">
            <h4 className="text-muted">Location</h4>
            <p className="text-muted">Working with small businesses across New England. Based in Burlington Vermont.</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div className="text-center text-md-left">
            <h4 className="text-muted">Connect with Rachel</h4>
              <p>
                <a title="Call me at 607-386-5872" href="tel:607-386-5872">607-386-5872</a><br />
                <Link title="Lets discuss your business!" to="/contact">hello@racheldotey.com</Link>
              </p>
            <p>[Facebook] [GitHub] [Twitter] [LinkedIn]</p>
          </div>
        </Col>
      </Row>
    </Container>
    <hr />
    <Container className="my-5">
      <Row>
        <Col className="built-with-logos text-center">
          <small className="text-muted">this website was built with</small><br />
          <a title="HTML5 is the latest evolution of the standard that defines HTML." href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><LogoHTML5 /></a>
          <a title="CSS3 is the latest evolution of the Cascading Style Sheets language." href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank"><LogoCSS3 /></a>
          <a title="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world." href="https://sass-lang.com/" target="_blank"><LogoSASS /></a>
          <br className="d-block d-sm-none" />
          <a title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." href="https://nodejs.org/" target="_blank"><LogoNodeJS /></a>
          <a title="React.js is a JavaScript library for building user interfaces." href="https://reactjs.org/" target="_blank"><LogoReactJS /></a>
          <a title="Gatsby.js is a free and open source framework based on React that helps developers build blazing fast websites and apps." href="https://gatsbyjs.org/" target="_blank"><LogoGatsbyJS /></a>
          <a title="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data." href="https://graphql.org/" target="_blank"><LogoGraphql /></a>
          <br />
          <small className="text-muted">optimized for display on a</small>
          <span>&nbsp;&nbsp;</span>
          <span class="badge badge-secondary d-inline d-sm-none">x-small</span>
          <span class="badge badge-secondary d-none d-sm-inline d-md-none">small</span>
          <span class="badge badge-secondary d-none d-md-inline d-lg-none">medium</span>
          <span class="badge badge-secondary d-none d-lg-inline d-xl-none">large</span>
          <span class="badge badge-secondary d-none d-xl-inline">x-large</span>
          <span>&nbsp;&nbsp;</span>
          <small className="text-muted">device</small>
        </Col>
      </Row>
    </Container>
    <hr />
    <Container className="my-4">
      <Row>
        <Col sm={6} className="text-center text-sm-left">
          <Link title={"© 2012-" + new Date().getFullYear() + " Rachel L Dotey, Website and Software Developer"} to="/contact"><Signature /></Link>
        </Col>
        <Col sm={6}>
          <div className="d-flex h-100 text-center">
            <div className="justify-content-center align-self-center ml-auto mr-auto mr-sm-0">
              <small className="text-muted">
                <Link to="/site-map">Site Map</Link> | <Link to="/policies">Website Policies</Link>
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
