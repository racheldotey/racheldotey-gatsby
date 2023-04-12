import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useSiteMetadata from '../hooks/use-site-metadata';
import ContactForm from '../components/form-contact';
import SocialButtons from './follow-my-social';
import { LocationParagraph } from './snippets';

const LocationColumn: React.FC = () => {
  const { author } = useSiteMetadata();
  const { phone, email } = author;

  const phoneCTA =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  const emailCTA =
    "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <div className="text-center">
      <div>
        <p className="h4">Follow Me At</p>
        <SocialButtons />
      </div>
      <hr />
      <div className="py-3">
        <p className="h4">Connect with Rachel</p>
        <p>
          <a title={phoneCTA} href={`tel:${phone}`}>
            {phone}
          </a>
          <br />
          <a title={emailCTA} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
      <hr />
      <div>
        <p className="h4">Location</p>
        <LocationParagraph />
      </div>
    </div>
  );
};

export const ContactBanner: React.FC = () => (
  <section className="contact-banner">
    <a href="#contact"></a>
    <Container className="d-none d-md-block">
      <Row className="justify-content-md-center">
        <Col
          sm={{ order: 1, span: 12 }}
          md={5}
          lg={5}
          xl={5}
          className="text-center"
        >
          <LocationColumn />
        </Col>
        <Col sm={{ order: 2, span: 12 }} md={7} lg={6} xl={5}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    <div className="d-block d-md-none">
      <div className="smallview-contact-banner py-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-md-center py-5">
          <Col>
            <LocationColumn />
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default ContactBanner;
