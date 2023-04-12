import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useSiteMetadata from '../../hooks/use-site-metadata';
import BuiltWithLogos from '../built-with-logos';
import SocialButtons from '../follow-my-social';
import { LocationParagraph } from '../snippets';

const CurrentScreenSizeBadge: React.FC = () => {
  return (
    <>
      <small className="text-muted">optimized for display on a</small>
      <span>&nbsp;&nbsp;</span>
      <span className="badge bg-secondary d-inline d-sm-none">x-small</span>
      <span className="badge bg-secondary d-none d-sm-inline d-md-none">
        small
      </span>
      <span className="badge bg-secondary d-none d-md-inline d-lg-none">
        medium
      </span>
      <span className="badge bg-secondary d-none d-lg-inline d-xl-none">
        large
      </span>
      <span className="badge bg-secondary d-none d-xl-inline">x-large</span>
      <span>&nbsp;&nbsp;</span>
      <small className="text-muted">screen</small>
    </>
  );
};

export const Footer: React.FC = () => {
  const { author, header } = useSiteMetadata();
  const { tagline } = header;
  const { phone, email } = author;

  const copyright = `© 2012-${new Date().getFullYear()} ${
    author.name
  }, ${tagline}`;
  const phoneCTA =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  const emailCTA =
    "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <footer className="footer">
      <Container className="my-5">
        <Row>
          <Col sm={12} md={4}>
            <div className="text-center text-md-left mb-5 mb-md-0">
              <h4>
                How can I
                <br />
                make your business
                <br />
                <span className="highlight">better</span>?
              </h4>

              <div className="call-to-action">
                <Link
                  title="I would love to talk about your business!"
                  to="/contact"
                  className="button button-dark"
                >
                  <span>Lets discuss your ideas</span>
                  <i className="fal fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-xs-3">
            <div className="text-center text-md-left mb-5 mb-sm-0 text-muted">
              <h4>Location</h4>
              <LocationParagraph />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="text-center text-md-left">
              <h4 className="text-muted">Connect with Rachel</h4>
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
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="my-5">
        <Row>
          <Col className="built-with-logos text-center">
            <small className="text-muted">this website was built with</small>
            <br />
            <BuiltWithLogos />
            <CurrentScreenSizeBadge />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="my-4">
        <Row>
          <Col sm={6}>
            <Link title={copyright} to="/contact">
              <StaticImage
                src="../../images/signature_236x64.png"
                alt="This is the developer you are looking for..."
                placeholder="blurred"
                layout="fixed"
                width={236}
              />
            </Link>
            <small className="text-muted fw-light fst-italic">
              {copyright}
            </small>
          </Col>
          <Col sm={6}>
            <div className="d-flex h-100 align-items-center">
              {/* <div className="ms-auto text-muted">
                <Link to="/site-map">Site Map</Link> |{' '}
                <Link to="/policies">Website Policies</Link>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
