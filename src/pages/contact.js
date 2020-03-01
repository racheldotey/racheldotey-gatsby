import React from "react"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <h1 className="page-header">Hi from the contact page.</h1>
      <p>Welcome to page 2</p>
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
    <div className="page-end"></div>
  </Layout>
)

export default ContactPage
