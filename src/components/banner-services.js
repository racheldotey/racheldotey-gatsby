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
                            <p>I theme websites using responsive mobile first design so your website can adapt and deliver the best experience to users on any screen.</p>
                            <div className="text-center">
                                <Link to="/services">See my services</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <p className="h2 text-center">Search Engine Marking</p>
                            <PictureMarketing />
                            <p className="mt-3">Getting found in Google is tricky. From content strategy and social media marketing, then there's adwords and Google reviews. Results are tracked with Google Analyitics.</p>
                            <p>We discover the unique needs of your business and create a targeted strategy for you.</p>
                            <div className="text-center">
                                <Link to="#contact">Contact me</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div>
                            <p className="h2 text-center">Software Development</p>
                            <PictureSoftware />
                            <p className="mt-3">As a full stack software developer I create custom WordPress plugins, membership areas, payment gateways, React based single page websites, fully custom web and phone apps.</p>
                            <p>I can create anything your business needs to succeed in today's competitive online markets.</p>
                            <div className="text-center">
                                <Link to="/about">Lets build something</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

export default ServicesBanner