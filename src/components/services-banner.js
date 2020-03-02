import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const ServicesBanner = () => (
    <section className="services-banner">
        <div className="d-flex h-100">
            <Container className="justify-content-center align-self-center">
                <Row>
                    <Col>
                        <span className="h2">Welcome!</span>
                        <p className="lead">I am a full stack software developer with experience making
                    interative web experiences.</p>
                        <p className="lead">I am interested in helping small businesses gain visibility on the internet.
                    Create strong brands and stay competitive in the market.</p>
                        <div className="text-center">
                            <Link to="#contact" className="btn btn-highlight-reverse btn-lg">Lets Talk</Link>
                        </div>
                    </Col>
                    <Col>
                        <span className="h2">Welcome!</span>
                        <p className="lead">I am a full stack software developer with experience making
                    interative web experiences.</p>
                        <p className="lead">I am interested in helping small businesses gain visibility on the internet.
                    Create strong brands and stay competitive in the market.</p>
                        <div className="text-center">
                            <Link to="#contact" className="btn btn-highlight-reverse btn-lg">Lets Talk</Link>
                        </div>
                    </Col>
                    <Col>
                        <span className="h2">Welcome!</span>
                        <p className="lead">I am a full stack software developer with experience making
                    interative web experiences.</p>
                        <p className="lead">I am interested in helping small businesses gain visibility on the internet.
                    Create strong brands and stay competitive in the market.</p>
                        <div className="text-center">
                            <Link to="#contact" className="btn btn-highlight-reverse btn-lg">Lets Talk</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

export default ServicesBanner