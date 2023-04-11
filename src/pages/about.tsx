import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useSiteMetadata from '../hooks/use-site-metadata';
import Layout from '../components/layout';
import CallOutBanner from '../components/banner-callout';
import SocialButtons from '../components/follow-my-social';

//https://www.canva.com/templates/EADaoa2YgA8-pink-blue-design-resume/
const AboutPage: React.FC<PageProps> = () => {
  const { title, tagline, phone, email } = useSiteMetadata();

  const phoneCTA =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  const emailCTA =
    "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <Layout>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md={12} lg={10} className="text-center page-intro">
            <div className="inline-image">
              <StaticImage
                src="../images/signature_236x64.png"
                alt="This is the developer you are looking for..."
                placeholder="blurred"
                layout="fixed"
                width={236}
              />
            </div>
            <p className="lead">
              Web Design, Software Development, and Search Engine Marketing
            </p>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col sm={12} md={6}>
            <p>
              I am a full stack developer with over 10 years of experience
              across a broad range of technologies.
            </p>
            <p>
              My background includes front-end and back-end software
              development, project management, search engine optimization,and
              marketing.
            </p>
            <p>
              I love working with fun things like React and WordPress, and I
              actually know quite a few languages and frameworks. I like to use
              the best tool for the job to get the best results.
            </p>
          </Col>
          <Col sm={12} md={6} className="text-center">
            <div className="profile-image">
              <StaticImage
                src="../images/picture-square.png"
                alt="This is the developer you are looking for..."
                placeholder="blurred"
                layout="fixed"
                width={236}
              />
            </div>
            <p>
              <a title={phoneCTA} href={`tel:${phone}`}>
                {phone}
              </a>
              <br />
              <Link title={emailCTA} to="/contact">
                {email}
              </Link>
            </p>
            <SocialButtons />
          </Col>
        </Row>
      </Container>
      <CallOutBanner />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Me | RachelDotey.ninja</title>;
