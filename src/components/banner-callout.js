import { Link } from "gatsby"
import React from "react"

import PictureCallout from "./images/picture-callout"
import { Container, Row, Col  } from "react-bootstrap"

const CallOutBanner = () => (
    <section class="callout-banner">
      <Container>
        <Row>
          <Col>
            <h2>Lets talk about what will take your business presence to the next level.</h2>
            <p className="lead">Whether its a website redesign, a targeted local search campaign, or developing a new application to provide your service to users in an innovative way - I'm the developer you are looking for.</p>
            <p className="lead">Reach out today.</p>
            <div className="pt-3">
              <Link className="button button-light" to="/contact">Connect with me</Link>
            </div>
          </Col>
          <Col>
            <PictureCallout />
          </Col>
        </Row>
      </Container>
    </section>
)

export default CallOutBanner
