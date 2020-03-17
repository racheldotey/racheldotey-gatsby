import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOutBanner from "../components/banner-callout"

import ProfilePicture from "../components/images/profle-picture"
import Signature from "../components/images/signature-black"
import SocialButtons from "../components/images/follow-my-social"

//https://www.canva.com/templates/EADaoa2YgA8-pink-blue-design-resume/
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="text-center page-intro">
          <Signature />
          <p className="lead">Web Design, Software Development, and Search Engine Marketing</p>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col sm={12} md={6}>
          <p>I am a full stack developer with over 10 years of experience across a broad range of technologies.</p>
          <p>My background includes front-end and back-end software development, project management, search engine optimization,and  marketing.</p>
          <p>I love working with fun things like React and WordPress, and I actually know quite a few languages and frameworks. I like to use the best tool for the job to get the best results.</p>
        </Col>
        <Col sm={12} md={6} className="text-center">
              <ProfilePicture />
              <p>
                <a title="Call me at 607-386-5872" href="tel:607-386-5872">607-386-5872</a><br />
                <Link title="Lets discuss your business!" to="/contact">hello@racheldotey.com</Link>
              </p>
            <SocialButtons />
        </Col>
      </Row>
    </Container>
    <CallOutBanner />
  </Layout>
)

export default AboutPage
