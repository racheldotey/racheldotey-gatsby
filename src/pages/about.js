import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/banner-callout"

import PictureProfile from "../components/images/picture-profle"
import Signature from "../components/images/signature-black"

//https://www.canva.com/templates/EADaoa2YgA8-pink-blue-design-resume/
const AboutPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container>
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="page-intro">
          <Signature />
          <p className="lead">Web Design, Software Development, and Search Engine Marketing</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <h4 className="text-center">About</h4>
          <p></p>
        </Col>
        <Col className="text-center">
          <PictureProfile />          
        </Col>
        <Col>
          <h4 className="text-center">Contact</h4>
          <ul>
            <li></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-center">Education</h4>
          <ul>
            <li></li>
          </ul>
        </Col>
        <Col>
          <h4 className="text-center">Skills</h4>
          <ul>
            <li></li>
          </ul>
        </Col>
        <Col>
          <h4 className="text-center">Expertise</h4>
          <ul>
            <li></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Experience</h4>
          <p></p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="lead">#UVMComputes</p>
        </Col>
      </Row>
    </Container>
    <div className="page-end"></div>
    <CallOutBanner />
  </Layout>
)

export default AboutPage
