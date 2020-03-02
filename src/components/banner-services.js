import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PictureMarketing from "./images/banner-services-marketing"
import PictureResponsive from "./images/banner-services-responsive"
import PictureSoftware from "./images/banner-services-software"

const ServicesBanner = () => (
    <section className="services-banner">
        <div className="d-flex h-100">
            <Container className="justify-content-center align-self-center">
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <PictureResponsive/>
                            <p className="h2 text-center">Responsive web design</p>
                            <p>More and more wesite visiters are browsing using their mobile devices. It has become essential for websites to function perfectly on phones and tablets.</p>
                            <p>We design all websites with moble first themeing and responsive design. This ensures that your website will function as good as a downloaded store app.</p>
                            <div className="text-center">
                                <Link to="#contact" className="btn btn-highlight-reverse btn-lg">Lets Talk</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <PictureMarketing/>
                            <p className="h2 text-center">Marking</p>
                            <p>I am a full stack software developer with experience making
                        interative web experiences.</p>
                            <p>I am interested in helping small businesses gain visibility on the internet.
                        Create strong brands and stay competitive in the market.</p>
                            <div className="text-center">
                                <Link to="#contact" className="btn btn-highlight-reverse btn-lg">Lets Talk</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div>
                            <PictureSoftware/>
                            <p className="h2 text-center">Software development</p>
                            <p>I'm a full stack developer with experience working with dozens of languages and frameworks.</p>
                            <p>I am interested in helping small businesses gain visibility on the internet.
                        Create strong brands and stay competitive in the market.</p>
                            <div className="text-center">
                                <Link to="#contact" className="btn btn-highlight-reverse btn-lg">Lets Talk</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

export default ServicesBanner