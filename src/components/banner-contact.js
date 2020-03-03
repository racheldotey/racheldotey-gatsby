import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "../components/form-contact"

const LocationColumn = () => (
    <div className="text-center">
        <div>
            <p className="h4">Location</p>
            <p>Working with small businesses across New England. Based in beautiful Burlington Vermont.</p>
        </div>
        <hr/>
        <div className="py-3">
            <p className="h4">Connect with Rachel</p>
            <p>607-386-5872<br />
                hello{"{at}"}racheldotey.com</p>
        </div>
        <hr/>
        <div className="pb-5">
            <p className="h4">Follow Me At</p>
            <p>[Facebook] [GitHub] [Twitter] [LinkedIn]</p>
        </div>
    </div>
)

const ContactBanner = () => (
    <section className="contact-banner"><a href="#contact"></a>
        <Container className="d-none d-md-block">
            <Row className="justify-content-md-center">
                <Col sm={{ order: 1, span: 12}} md={5} lg={5} xl={5} className="text-center">
                    {LocationColumn()}
                </Col>
                <Col sm={{ order: 2, span: 12}} md={7} lg={6} xl={5}>
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
                    <Col>
                        {LocationColumn()}
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
)

export default ContactBanner