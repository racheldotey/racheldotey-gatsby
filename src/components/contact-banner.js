import { Link } from "gatsby"
import React from "react"

import { Form, Button } from "react-bootstrap"

const ContactBanner = () => (
    <section class="full-banner contact-banner" id="hero">
        <div class="container">
            <h1><span class="highlight">ContactBanner</span>!</h1>
            <Form>
                <Form.Group controlId="contactBannerName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group controlId="contactBannerEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your best email" />
                </Form.Group>
                <Form.Group controlId="contactBannerMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </section>
)

export default ContactBanner