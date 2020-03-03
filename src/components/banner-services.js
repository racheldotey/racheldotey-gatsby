import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PictureMarketing from "./images/banner-services-marketing"
import PictureResponsive from "./images/banner-services-responsive"
import PictureSoftware from "./images/banner-services-software"

const ServicesBanner = () => (
    <section className="services-banner"><a href="#services"></a>
        <div className="d-flex h-100">
            <Container className="justify-content-center align-self-center">
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <p className="h2 text-center">Responsive Web Design</p>
                            <PictureResponsive />
                            <p className="mt-3">Customers visit browse the web on their cell phones more than ever before, making responsive web design essential to reaching your clients where they are.</p>
                            <p>We theme websites using responsive mobile first design so your website can adapt and deliver the best experience to users on any screen.</p>
                            <div className="text-center">
                                <Link to="/services">See my services</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <p className="h2 text-center">Search Engine Marking</p>
                            <PictureMarketing />
                            <p className="mt-3">Getting found in Google is tricky. From content strategy and social media marketing, then there's adwords and Google reviews.</p>
                            <p>There are a lot of techniques to choose from, and not all of these will work for your business. We discover the unique needs of your business and create a targeted strategy for you.</p>
                            <div className="text-center">
                                <Link to="#contact">Contact me</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div>
                            <p className="h2 text-center">Software Development</p>
                            <PictureSoftware />
                            <p className="mt-3">I'm a full stack developer with experience working with dozens of languages and frameworks.</p>
                            <p>I am interested in helping small businesses gain visibility on the internet.
                        Create strong brands and stay competitive in the market.</p>
                            <div className="text-center">
                                <Link to="/about">Review my skills</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

export default ServicesBanner