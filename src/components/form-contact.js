import { Link } from "gatsby"
import React from "react"
import { Form, Button } from "react-bootstrap"

const ContactForm = () => (
    <Form className="contact-form">
        <Form.Group controlId="contacFormName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" />
        </Form.Group>

        <Form.Group controlId="contacFormEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your best email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="contacFormPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone number" />
        </Form.Group>

        <Form.Group controlId="contacFormMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <div className="text-right">
            <Button variant="highlight-reverse" type="submit" size="lg">
                Submit
            </Button>
        </div>

    </Form>
)

export default ContactForm