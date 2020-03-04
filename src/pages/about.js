import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/banner-callout"

import ProfilePicture from "../components/images/profle-picture"
import Signature from "../components/images/signature-black"

//https://www.canva.com/templates/EADaoa2YgA8-pink-blue-design-resume/
const AboutPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="text-center page-intro">
          <Signature />
          <p className="lead">Web Design, Software Development, and Search Engine Marketing</p>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <h4 className="text-center">About</h4>
          <p>Full stack developer with over 10 years of experience across a broad range of technologies.</p>
          <p>My background includes front-end and back-end software development, project management, search engine optimization, social media marketing, and graphic design.</p>
        </Col>
        <Col className="text-center">
          <ProfilePicture />          
        </Col>
        <Col>
              <p className="h4">Connect with Rachel</p>
              <p><strong className="highlight">Servicing clients in New England. Based in Burlington Vermont.</strong></p>
              <p> </p>
              <p>607-386-5872<br />
                hello{"{at}"}racheldotey.com</p>
              <p>[Facebook] [GitHub] [Twitter] [LinkedIn]</p>
        </Col>
      </Row>
      <Row className="pt-4">
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
      <Row className="pt-4">
        <Col>
          <h4>Experience</h4>
          <p></p>
        </Col>
      </Row>
      <Row className="pt-1 pb-5">
        <Col>
        <p className="lead">#UVMComputes</p>
        </Col>
      </Row>
    </Container>
    <CallOutBanner />
  </Layout>
)

export default AboutPage
