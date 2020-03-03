import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "../components/form-contact"

const ContactBanner = () => (
    <section className="contact-banner">
        <Container className="d-none d-md-block">
            <Row className="justify-content-md-center">
                <Col sm={12} md={5} lg={5} xl={5} className="text-center">
                    <div className="contact-meta">
                        <div className="meta divider">
                            <p className="h4">Location</p>
                            <p>Working with small businesses across New England. Based in beautiful Burlington Vermont.</p>
                        </div>
                        <div className="meta divider">
                            <p className="h4">Connect with Rachel</p>
                            <p>607-386-5872<br />
                                hello{"{at}"}racheldotey.com</p>
                        </div>
                        <div className="meta">
                            <p className="h4">Follow Me At</p>
                            <p>[Facebook] [GitHub] [Twitter] [LinkedIn]</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={7} lg={6} xl={5}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
        <div className="smallview-contact-banner d-block d-md-none">
            <div className="smallview-contact-banner mb-5">
                <ContactForm />
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="text-center">
                        <div className="contact-meta">
                            <div className="meta divider">
                                <p className="h4">Location</p>
                                <p>Working with small businesses across New England. Based in beautiful Burlington Vermont.</p>
                            </div>
                            <div className="meta divider">
                                <p className="h4">Connect with Rachel</p>
                                <p>607-386-5872<br />
                                    hello{"{at}"}racheldotey.com</p>
                            </div>
                            <div className="meta">
                                <p className="h4">Follow Me At</p>
                                <p>[Facebook] [GitHub] [Twitter] [LinkedIn]</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

export default ContactBanner