import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactBanner from "../components/banner-contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="text-center page-intro">
          <h1 className="title">Would you like to know more?</h1>
          <p className="lead">Are you interested in learning about how I can improve your customer experience? Fill out this form and I will get right back to you for a free phone conseltation.</p>
        </Col>
      </Row>
    </Container>
    <div className="pb-5">
      <ContactBanner/>
    </div>
    <hr/>
  </Layout>
)

export default ContactPage
