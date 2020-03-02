import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="page-intro">
          <h1 className="title">How can I help?</h1>
          <p className="lead">I work with small businesses to create an online brand through web design an marketing. Would a website redesign improve your image with customers? Do you have an application or software idea?<br/>
          Contact me below and lets talk about what we can build together.</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={12} md={5} lg={5} xl={5} className="text-center">
          <div className="contact-meta">
            <div class="meta divider">
              <p className="h4">Location</p>
              <p>Working with small businesses across New England. Based in beautiful Burlington Vermont.</p>
            </div>
            <div class="meta divider">
              <p className="h4">Connect with Rachel</p>
              <p>607-386-5872<br />
                hello{"{at}"}racheldotey.com</p>
            </div>
            <div class="meta">
              <p className="h4">Follow Me At</p>
              <p>[Facebook] [GitHub] [Twitter] [LinkedIn]</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={7} lg={6} xl={5} className="">
          <Form className="contact-form">
            <Form.Group controlId="contactPageName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>

            <Form.Group controlId="contactPageEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your best email" />
            </Form.Group>

            <Form.Group controlId="contactPagePhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>

            <Form.Group controlId="contactPageMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button variant="highlight" type="submit" size="lg">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <div className="page-end footer-divider"></div>
  </Layout>
)

export default ContactPage
