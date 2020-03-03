import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PictureDesk from "./images/picture-desk-macbook"

const IntroductionBanner = () => (
    <section className="introduction-banner"><a href="#intro"></a>
        <Container>
            <Row className="d-flex h-100 py-3">
                <Col sm={12} md={4} lg={6} className="justify-content-center align-self-center text-center pb-3">
                    <PictureDesk />
                </Col>
                <Col sm={12} md={8} lg={6}>
                    <span className="h2">It's great to meet you!</span>
                    <p className="lead">I am a full stack software developer with experience making
                interative web experiences.</p>
                    <p className="lead">I am interested in helping small businesses gain visibility on the internet.
                Create strong brands and stay competitive in the market.</p>
                    <div className="text-center">
                        <Link to="#services" className="button button-light">Look at what I do</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default IntroductionBanner